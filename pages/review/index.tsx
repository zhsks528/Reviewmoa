import { Fragment } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import ReviewList from "components/RevivewList";
import ReviewCount from "components/ReviewCount";
import GenderChart from "components/GenderChart";
import AgeChart from "components/AgeChart";

import dynamic from "next/dynamic";

const SpiderChart = dynamic(() => import("components/SpiderChart"), {
  ssr: false,
});

type ReviewType = {
  name: string;
  content: string;
  gender: string;
  age: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

type GenderType = {
  id: string;
  gender: string;
};

type AgeType = {
  id: string;
  age: string;
};

type GenderState = {
  male: number;
  female: number;
};

interface Props {
  reviewData: ReviewType[];
  genderData: GenderType[];
  ageData: AgeType[];
}

const Index: React.FC<Props> = ({ reviewData, genderData, ageData }) => {
  return (
    <Fragment>
      <ReviewList data={reviewData} />
      <ReviewCount data={reviewData} />
      <GenderChart data={genderData} />
      <AgeChart ages={ageData} />
      <SpiderChart data={reviewData} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const reviewRes = await axios.get("http://localhost:8000/review");
  const genderRes = await axios.get("http://localhost:8000/review/gender");
  const ageRes = await axios.get("http://localhost:8000/review/age");

  const reviewData = reviewRes.data;
  const genderData = genderRes.data;
  const ageData = ageRes.data;

  return {
    props: { reviewData, genderData, ageData },
  };
};

export default Index;
