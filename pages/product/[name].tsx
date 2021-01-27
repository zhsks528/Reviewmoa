import axios, { AxiosResponse } from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  products: any;
}

const Index: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <div>제품목록</div>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/review/${encodeURIComponent(product.name)}`}
        >
          <div>{product.name}</div>
        </Link>
      ))}
    </div>
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
    fallback: false,
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
