import React from "react";
import styled from "styled-components";
import ReviewLayout from "components/ReviewLayout";
import { formatDate } from "utils/format";
import { Avatar } from "@material-ui/core";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import * as colors from "constants/colors";

const ReviewGrid = styled.div`
  height: calc(100% - 50px);
  grid-column: 3 / 5;
  grid-row: 2 / 4;
`;

const CardContainer = styled.article`
  display: flex;
  width: 100%;
  margin-bottom: 20px;

  &:hover {
    background-color: rgb(17, 28, 46);
  }
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
  font-size: 12px;
  color: ${colors.SUB_COLOR};
  margin-bottom: 5px;
`;

const EtcContainer = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  color: ${colors.SUB_COLOR};
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
  margin-bottom: 8px;
`;

const ReviewContent = styled.div`
  color: ${colors.SUB_COLOR};
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    -webkit-line-clamp: 3;
  } ;
`;

const Wrapper = styled.section`
  grid-column: 3 / 5;
  grid-row: 2 / 4;

  @media (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: auto;
  }

  @media (max-width: 480px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const SurveyContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const SurveyBox = styled.div`
  background: rgb(17, 28, 46);
  border: 1px solid rgb(90, 128, 191);
  border-radius: 10px;
  padding: 3px 8px;
  margin-right: 10px;
  font-size: 13px;
  color: ${colors.MAIN_COLOR};
`;

const ReviewContainer = styled.div`
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #3c4f6e;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3c4f6e;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #273854;
  }
`;
interface Props {
  data: any;
  name: string;
}

const CounterBtn = ({ survey }) => {
  return (
    <SurveyContainer>
      <SurveyBox>기술 {survey.tech}</SurveyBox>
      <SurveyBox>가격 {survey.price}</SurveyBox>
      <SurveyBox>브랜드 {survey.brand}</SurveyBox>
    </SurveyContainer>
  );
};

const ReviewItem = ({ review, name }) => {
  return (
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
        <CounterBtn survey={review.surveyState} />
        <ReviewContent>{review.reviewState.content}</ReviewContent>
      </CardRight>
    </CardContainer>
    // </Link>
  );
};

const ReviewList: React.FC<Props> = ({ data, name }) => {
  return (
    <Wrapper>
      <ReviewLayout title="리뷰" icon={faUsers}>
        {/* <Link href="review/post">
        <button>글 작성</button>
      </Link> */}
        <ReviewGrid>
          <ReviewContainer>
            {data.map((item) => (
              <ReviewItem review={item} name={name} key={item._id} />
            ))}
          </ReviewContainer>
        </ReviewGrid>
      </ReviewLayout>
    </Wrapper>
  );
};

export default ReviewList;
