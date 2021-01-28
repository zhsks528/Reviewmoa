import { Fragment } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import axios, { AxiosResponse } from "axios";
import ReviewList from "components/RevivewList";
import ReviewCount from "components/ReviewCount";
import dynamic from "next/dynamic";

const GenderChart = dynamic(() => import("components/GenderChart"), {
  ssr: false,
});

const AgeChart = dynamic(() => import("components/AgeChart"), {
  ssr: false,
});

const SpiderChart = dynamic(() => import("components/SpiderChart"), {
  ssr: false,
});

interface Props {
  reviews: any;
  name: string;
}

const Index: NextPage<Props> = ({ reviews, name }) => {
  return (
    <Fragment>
      <ReviewList data={reviews} name={name} />
      <ReviewCount data={reviews} />
      <GenderChart data={reviews} />
      <AgeChart ages={reviews} />
      <SpiderChart data={reviews} />
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: AxiosResponse<any> = await axios.get(
    "http://localhost:8000/products"
  );
  const products: Array<any> = await res.data;

  let paths = products.map((product) => ({
    params: { name: product.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const paramsName: any = params.name;
  const res: AxiosResponse<any> = await axios.get(
    "http://localhost:8000/products/" + encodeURI(paramsName)
  );

  const { reviews, name } = await res.data;

  return {
    props: { reviews, name },
  };
};

export default Index;
