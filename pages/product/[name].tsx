import axios, { AxiosResponse } from "axios";
import styled from "styled-components";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Header from "components/Header";
import { useRouter } from "next/router";

const Section = styled.section`
  height: 100%;
  margin-top: 70px;
  padding: 30px;
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

const SearchQuery = styled.div`
  display: block;
  color: rgb(253, 253, 253);
  font-size: 27px;
  margin-bottom: 40px;
`;

const ProductCardWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: inline-block;
`;

const ProductCard = styled.div`
  width: 100%;
  background: rgb(11, 18, 30);
  border: 1px solid rgb(33, 50, 78);
  padding: 16px;
  border-radius: 4px;
`;

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  min-width: 360px;
  border-radius: 4px;
  z-index: 9;
  cursor: pointer;

  ${ProductCard}:hover {
    border: 1px solid rgb(90, 128, 191);
    background-color: rgb(17, 28, 46);
  }
`;

const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
  width: 100%;
`;

const ProductCardImg = styled.div`
  background-color: rgb(17, 236, 229);
  height: 75px;
  width: 75px;
`;

const ProductCardName = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 12px;
`;

const ProductCardRating = styled.div`
  margin-left: 12px;
`;

const RatingScore = styled.span`
  font-size: 45px;
  line-height: 44px;
  color: rgb(17, 236, 229);
`;

const RatingUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const SubInfo = styled.div`
  font-size: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #c6d3e7;
  overflow: hidden;

  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
  } ;
`;

interface Props {
  products: any;
}

const Products = ({ product }) => {
  return (
    <article>
      <ProductCardWrapper>
        <ProductCardContainer>
          <Link
            key={product.id}
            href={`/review/${encodeURIComponent(product.name)}`}
          >
            <ProductCard>
              <ProductCardInfo>
                <div>
                  <ProductCardImg />
                </div>
                <ProductCardName>
                  <h3>{product.name}</h3>
                  <SubInfo>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </SubInfo>
                </ProductCardName>
                <ProductCardRating>
                  <div>
                    <RatingScore>4.8</RatingScore>/5
                  </div>
                  <RatingUser>
                    <div>({product.reviews ? product.reviews.length : 0})</div>
                    <FontAwesomeIcon icon={faUser} />
                  </RatingUser>
                </ProductCardRating>
              </ProductCardInfo>
            </ProductCard>
          </Link>
        </ProductCardContainer>
      </ProductCardWrapper>
    </article>
  );
};

const Index: React.FC<Props> = ({ products }) => {
  const router = useRouter();
  const productName = router.query.name;
  const count = products ? products.length : 0;

  return (
    <>
      <Header />
      <Section>
        <SearchQuery>
          검색 키워드 : {productName} ({count})
        </SearchQuery>
        {products && products.length !== 0 ? (
          products.map((product) => <Products product={product} />)
        ) : (
          <div>검색결과가 없습니다. 다시 검색해주세요.</div>
        )}
      </Section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: AxiosResponse<any> = await axios.get(
    "http://localhost:8000/search"
  );

  const products: Array<any> = await res.data;

  let paths = products.map((product) => ({
    params: { name: product.name },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const name: any = params.name;
  const res: AxiosResponse<any> = await axios.get(
    "http://localhost:8000/search/" + encodeURI(name)
  );
  const products: AxiosResponse<any> = await res.data;

  return {
    props: { products },
  };
};

export default Index;
