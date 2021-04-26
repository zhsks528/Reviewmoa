import React, { useState } from "react";
import styled from "styled-components";
import ReviewLayout from "components/ReviewLayout";
import { formatDate } from "utils/format";
import { Avatar } from "@material-ui/core";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import palatte from "styles/palattes";

const ReviewGrid = styled.div`
  height: calc(100% - 50px);
  grid-column: 3 / 5;
  grid-row: 2 / 4;
`;

const CardContainer = styled.article`
  display: flex;
  width: 100%;
  padding: 10px;

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
  color: ${palatte.SUB_COLOR};
  margin-bottom: 5px;
`;

const EtcContainer = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  color: ${palatte.SUB_COLOR};
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

const ReviewContent = styled.div<MoreProps>`
  color: ${palatte.SUB_COLOR};
  white-space: pre-wrap;
  display: -webkit-box;
  ${(props) => (props.more ? "" : "-webkit-line-clamp: 2;")}
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  color: ${palatte.MAIN_COLOR};
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

const MoreText = styled.span<MoreProps>`
  float: right;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 15px;
  position: relative;

  &::after {
    content: "";
    width: 5px;
    height: 5px;
    border-top: 3px solid white;
    border-right: 3px solid white;
    display: inline-block;
    transform: ${(props) =>
      props.more ? "rotate(-45deg);" : "rotate(135deg);"}
    position: absolute;
    top: ${(props) => (props.more ? "55%;" : "30%;")}
    right: -15px;
  }
`;

interface Props {
  data: any;
  name: string;
}

interface ItemProps {
  review: any;
  name: string;
}

interface MoreProps {
  more: boolean;
}

interface Survey {
  tech: number;
  price: number;
  brand: number;
}
interface ScoreProps {
  survey: Survey;
}

const CounterBtn: React.FC<ScoreProps> = ({ survey }) => {
  const { tech, price, brand } = survey;

  return (
    <SurveyContainer>
      <SurveyBox>기술 {tech}</SurveyBox>
      <SurveyBox>가격 {price}</SurveyBox>
      <SurveyBox>브랜드 {brand}</SurveyBox>
    </SurveyContainer>
  );
};

const ReviewItem: React.FC<ItemProps> = ({ review, name }) => {
  const [more, setMore] = useState(false);

  const handleMoreText = () => {
    setMore(!more);
  };

  const contentLen = review.reviewState.content.length;
  const text = more ? "접기 " : "펼쳐보기";

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
        <ReviewContent more={more}>{review.reviewState.content}</ReviewContent>
        {contentLen && contentLen >= 100 && (
          <MoreText onClick={handleMoreText} more={more}>
            {text}
          </MoreText>
        )}
      </CardRight>
    </CardContainer>
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
