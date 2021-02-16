import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const Wrapper = styled.div`
  background-color: rgb(29, 38, 54);
  margin: 8px 12px 24px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const Header = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 4px 8px;
  background-color: rgb(36, 54, 78);
  background-image: linear-gradient(
    to right,
    rgba(13, 230, 255, 0.15) 0%,
    rgba(201, 189, 174, 0) 25%
  );
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 200;
  flex-grow: 2;
  margin: 0;
  padding: 0;
  color: #92abcf;
`;

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

const ReviewList: React.FC<Props> = ({ data, name }) => {
  const getFormatDate = (date) => {
    const data = new Date(date);
    const year = data.getFullYear();

    let month = 1 + data.getMonth();
    const mm = month >= 10 ? month : "0" + month;

    let day = data.getDate();
    const dd = day >= 10 ? day : "0" + day;

    const result = `${year}-${mm}-${dd}`;
    return result;
  };

  return (
    <div>
      <Link href="review/post">
        <button>글 작성</button>
      </Link>
      <Wrapper>
        <Header>
          <Title>User Reviews</Title>
        </Header>
        <Body>
          <ReviewContainer>
            <ReviewGrid>
              {data.map((item) => (
                <Link
                  key={item._id}
                  href={`/review/${name}/${encodeURIComponent(item._id)}`}
                >
                  <ReviewCard>
                    <CardContainer>
                      <CardLeft>
                        <UserProfile>
                          <Avatar />
                        </UserProfile>
                        <ReviewInfo>
                          <User>이름</User>
                          <Day>{getFormatDate(item.createdAt)}</Day>
                          <EtcContainer>
                            <Etc>{item.reviewState.age}</Etc>
                            <Etc>{item.reviewState.gender}</Etc>
                          </EtcContainer>
                        </ReviewInfo>
                      </CardLeft>
                      <CardRight>
                        <ReviewTitle>{item.reviewState.title}</ReviewTitle>
                        <Line />
                        <ReviewContent>
                          {item.reviewState.content}
                        </ReviewContent>
                      </CardRight>
                    </CardContainer>
                  </ReviewCard>
                </Link>
              ))}
            </ReviewGrid>
          </ReviewContainer>
        </Body>
      </Wrapper>
    </div>
  );
};

export default ReviewList;
