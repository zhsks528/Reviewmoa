import styled from "styled-components";
import ReviewLayout from "components/ReviewLayout";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import CustomTooltip from "components/CustomTooltip";
import {
  AreaChart,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    price: 4000,
    amt: 2400,
  },
  {
    name: "Page B",
    price: 3000,
    amt: 2210,
  },
  {
    name: "Page C",
    price: 2000,
    amt: 2290,
  },
  {
    name: "Page D",
    price: 2780,
    amt: 2000,
  },
  {
    name: "Page E",
    price: 1890,
    amt: 2181,
  },
  {
    name: "Page F",
    price: 3500,
    amt: 2500,
  },
  {
    name: "Page G",
    price: 3490,
    amt: 2100,
  },
];

const PriceContainer = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 20px;
  align-items: center;
  color: ${(props) => (props.color ? "mediumseagreen" : "red")};
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 2em;
  margin-right 10px;

  @media (max-width: 1024px) {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.3em;
  }
`;

const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 16px solid mediumseagreen;
  margin-right: 10px;
`;

const TriangleDown = styled(TriangleUp)`
  border-bottom: 0;
  border-top: 16px solid red;
`;

const Secondhand = () => {
  const prevItem = data[data.length - 2];
  const lastItem = data[data.length - 1];
  const figure = (lastItem.price - prevItem.price) * 0.01;
  const isBoolean = figure > 0 ? true : false;

  return (
    <ReviewLayout title="중고가격" icon={faCoins}>
      <PriceContainer color={isBoolean}>
        <Price>{lastItem.price.toLocaleString("ko-KR")} 원</Price>
        {prevItem.price <= lastItem.price ? <TriangleUp /> : <TriangleDown />}
        <div>{figure.toFixed(2)}%</div>
      </PriceContainer>
      <div style={{ width: "100%", height: 150 }}>
        <ResponsiveContainer width="99%" height={150}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3" vertical={false} />
            <YAxis />
            <Tooltip
              cursor={{
                stroke: "#0DE6ff",
                fill: "#0DE6ff",
                opacity: 0.15,
              }}
              filterNull={false}
              content={<CustomTooltip active payload label title="중고가격" />}
              isAnimationActive={true}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#11ECE5"
              fill="#11ECE5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ReviewLayout>
  );
};

export default Secondhand;
