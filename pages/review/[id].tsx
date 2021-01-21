import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import axios from "axios";

const detail = ({ reviewData }) => {
  return (
    <div>
      <div>
        <div>{reviewData.reviewState.title}</div>
        <div>{reviewData.reviewState.gender}</div>
        <div>{reviewData.reviewState.age}</div>
        <div>{reviewData.reviewState.content}</div>

        <br />
        <div>기능 : {reviewData.surveyState.tech}</div>
        <div>가격 : {reviewData.surveyState.price}</div>
        <div>브랜드 : {reviewData.surveyState.brand}</div>
      </div>

      <Link href="/review">
        <button>돌아가기</button>
      </Link>
      <Link href="/review/delete">
        <button>삭제하기</button>
      </Link>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`http://localhost:8000/review`);
  const reviews = await res.data;

  let paths = reviews.map((review) => ({
    params: { id: review.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const reviewRes = await axios.get(
    `http://localhost:8000/review/${params.id}`
  );

  const reviewData = await reviewRes.data;

  return {
    props: { reviewData },
  };
};

export default detail;
