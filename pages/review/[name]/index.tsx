import styled from "styled-components";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import axios, { AxiosResponse } from "axios";
import ReviewList from "components/RevivewList";
import ReviewCount from "components/ReviewCount";
import AvgPrice from "components/AvgPrice";
import Rating from "components/Chart/Rating";
import Product from "components/Product";
import Header from "components/Header";
import GenderChart from "components/Chart/Gender";
import AgeChart from "components/Chart/Age";
import SpiderChart from "components/Chart/Spider";
import SecondhandChart from "components/Chart/Secondhand";

const Section = styled.section`
  height: 100%;
  margin-top: 70px;
  padding: 30px;
  overflow: auto;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  grid-template-rows: 300px 400px 1fr;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }

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
  reviews: any;
  name: string;
}

const Index: NextPage<Props> = ({ reviews, name }) => {
  return (
    <>
      <Header />
      <Section>
        <Product />
        <AvgPrice />
        <Rating data={reviews} />
        <ReviewCount />
        <SpiderChart data={reviews} />
        <GenderChart data={reviews} />
        <AgeChart ages={reviews} />
        <SecondhandChart />
        <ReviewList data={reviews} name={name} />
      </Section>
    </>
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
  const paramsName: any = await params.name;
  const res: AxiosResponse<any> = await axios.get(
    "http://localhost:8000/products/" + encodeURI(paramsName)
  );

  const { reviews, name } = await res.data;

  return {
    props: { reviews, name },
  };
};

export default Index;
