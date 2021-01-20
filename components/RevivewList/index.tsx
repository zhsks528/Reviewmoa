import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { Avatar } from "@material-ui/core";

const ReviewContainer = styled.div`
  display: flex;
  min-width: 250px;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background-color: #ebebeb;
  }
`;

const ReviewInfo = styled.div`
  margin-left: 15px;
`;

const ReviewTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 8px;
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
}

const ReviewList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Link href="review/post">
        <button>글 작성</button>
      </Link>
      {data.map((item) => (
        <Link key={item.id} href={`/review/${encodeURIComponent(item.id)}`}>
          <ReviewContainer>
            <Avatar />
            <ReviewInfo className="sidebarChat__info">
              <ReviewTitle>{item.reviewState.title}</ReviewTitle>
              <div>{item.reviewState.content}</div>
            </ReviewInfo>
          </ReviewContainer>
        </Link>
      ))}
    </div>
  );
};

export default ReviewList;
