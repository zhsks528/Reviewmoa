import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { formatDate } from "utils/formatDate";
import ReviewLayout from "components/ReviewLayout";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

// const Wrapper = styled.div`
//   background-color: rgb(29, 38, 54);
//   margin: 8px 12px 24px;
//   display: flex;
//   flex-direction: column;
//   border-radius: 4px;
// `;

const Body = styled.div`
  padding: 16px;
  display: grid;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewCard = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(13, 230, 255, 0.15);
  }
`;

const ReviewGrid = styled.div`
  display: flex;
  flex-flow: column wrap;

  ${ReviewCard}:nth-child(even) {
    background: rgb(36, 54, 78);
  }

  ${ReviewCard}:nth-child(even):hover {
    background: rgba(13, 230, 255, 0.15);
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CardLeft = styled.div`
  display: flex;
  margin-right: 12px;
`;

const UserProfile = styled.div`
  margin-right: 12px;
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  text-decoration: none;
  color: #c6d3e7;
  width: 160px;
  margin-bottom: 5px;
`;

const Day = styled.div`
  font-size: 10px;
  color: rgb(131, 144, 160);
  margin-bottom: 5px;
`;

const EtcContainer = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  color: #92abcf;
`;

const Etc = styled.div`
  margin: 0px 10px 10px 0px;
`;
const CardRight = styled.div`
  flex: 1 1 auto;
`;

const ReviewTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  color: rgb(17, 236, 229);
  margin-bottom: 8px;
`;

const ReviewContent = styled.div`
  color: #92abcf;
  white-space: pre-wrap;
`;

type ReviewProps = {
  title: string;
  content: string;
  gender: string;
  age: string;
};

type SurveyProps = {
  tech: string;
  price: string;
  brand: string;
};

type ReviewListType = {
  reviewState: ReviewProps;
  survetState: SurveyProps;
  createdAt: string;
  updatedAt: string;
  id: string;
};

interface Props {
  data: any;
  name: string;
}

const Line = styled.div`
  border-top: 1px solid rgb(73, 84, 103);
  width: 100%;
  height: 1px;
  margin-top: 15px;
`;

const ReviewItem = ({ review, name }) => {
  return (
    <Link
      key={review._id}
      href={`/review/${name}/${encodeURIComponent(review._id)}`}
    >
      <CardContainer>
        <CardLeft>
          <UserProfile>
            <Avatar />
          </UserProfile>
          <ReviewInfo>
            <User>이름</User>
            <Day>{formatDate(review.createdAt)}</Day>
            <EtcContainer>
              <Etc>{review.reviewState.age}</Etc>
              <Etc>{review.reviewState.gender}</Etc>
            </EtcContainer>
          </ReviewInfo>
        </CardLeft>
        <CardRight>
          <ReviewTitle>{review.reviewState.title}</ReviewTitle>
          <Line />
          <ReviewContent>{review.reviewState.content}</ReviewContent>
        </CardRight>
      </CardContainer>
    </Link>
  );
};

const Section = styled.section``;

const ReviewCardWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: inline-block;
`;

const ReviewCardTest = styled.div`
  width: 100%;
  background: rgb(11, 18, 30);
  border: 1px solid rgb(33, 50, 78);
  padding: 16px;
  border-radius: 4px;
`;

const ReveiewCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  min-width: 360px;
  border-radius: 4px;
  z-index: 9;
  cursor: pointer;

  ${ReviewCardTest}:hover {
    border: 1px solid rgb(90, 128, 191);
    background-color: rgb(17, 28, 46);
  }
`;

const Wrapper = styled.div`
  background: rgb(11, 18, 30);
  border: 1px solid rgb(33, 50, 78);
`;

const ReviewList: React.FC<Props> = ({ data, name }) => {
  return (
    <ReviewLayout title="리뷰" icon={faUsers}>
      {/* <Link href="review/post">
        <button>글 작성</button>
      </Link> */}
      <ReviewGrid>
        {data.map((item) => (
          <ReviewItem review={item} name={name} />
        ))}
      </ReviewGrid>
    </ReviewLayout>
  );
};

export default ReviewList;
