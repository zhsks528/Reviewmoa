import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Link from "next/link";
import axios, { AxiosResponse } from "axios";

interface Props {
  review: any;
}

const detail: NextPage<Props> = ({ review }) => {
  return (
    <div>
      <div>HI2</div>
      <div>
        <div>{review.reviewState.title}</div>
        <div>{review.reviewState.gender}</div>
        <div>{review.reviewState.age}</div>
        <div>{review.reviewState.content}</div>

        <br />
        <div>기능 : {review.surveyState.tech}</div>
        <div>가격 : {review.surveyState.price}</div>
        <div>브랜드 : {review.surveyState.brand}</div>
      </div>

      {/* <Link href="/review/아이패드">
        <button>돌아가기</button>
      </Link>
      <Link href="/review/delete">
        <button>삭제하기</button>
      </Link> */}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: AxiosResponse<any> = await axios.get(
    `http://localhost:8000/review`
  );
  const reviews: Array<any> = await res.data;

  let paths = reviews.map((review) => ({
    params: { id: review.id, name: review.name },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productName: any = params.name;
  const reivewID: any = params.id;

  const response: AxiosResponse<any> = await axios.get(
    `http://localhost:8000/review/${encodeURI(productName)}/${reivewID}`
  );

  const review = await response.data;

  return {
    props: { review },
  };
};

export default detail;
