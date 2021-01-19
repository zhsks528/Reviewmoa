import { Fragment, useState, useEffect } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import ReviewList from "components/RevivewList";
import ReviewCount from "components/ReviewCount";
import GenderChart from "components/GenderChart";
import AgeChart from "components/AgeChart";

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
  const [count, setCount] = useState<Number>(0);
  const [genderState, setGenderState] = useState<GenderState>({
    male: 0,
    female: 0,
  });
  const [ages, setAges] = useState<any>([]);

  useEffect(() => {
    setCount(reviewData.length);
  }, [count]);

  useEffect(() => {
    let male_count = 0;
    let female_count = 0;

    for (let idx in genderData) {
      if (genderData[idx].gender === "남성") {
        male_count += 1;
      } else {
        female_count += 1;
      }
    }

    setGenderState({
      male: male_count,
      female: female_count,
    });
  }, []);

  useEffect(() => {
    let agecounts = [0, 0, 0, 0, 0];

    ageData.map((item) => {
      if (item.age < 20) {
        agecounts[0] += 1;
      } else if (item.age >= 20 && item.age < 30) {
        agecounts[1] += 1;
      } else if (item.age >= 30 && item.age < 40) {
        agecounts[2] += 1;
      } else if (item.age >= 40 && item.age < 50) {
        agecounts[3] += 1;
      } else {
        agecounts[4] += 1;
      }
    });

    setAges(agecounts);
  }, []);

  return (
    <Fragment>
      <ReviewList data={reviewData} />
      <ReviewCount reviewCount={count} />
      <GenderChart data={genderState} />
      <AgeChart ages={ages} />
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
