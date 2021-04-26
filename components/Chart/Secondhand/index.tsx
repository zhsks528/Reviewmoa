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
import { formatData } from "utils/format";
import palatte from "styles/palattes";

const data = [
  {
    name: "Page A",
    value: 123333,
    amt: 2400,
  },
  {
    name: "Page B",
    value: 845522,
    amt: 2210,
  },
  {
    name: "Page C",
    value: 555855,
    amt: 2290,
  },
  {
    name: "Page D",
    value: 1005400,
    amt: 2000,
  },
  {
    name: "Page E",
    value: 955478,
    amt: 2181,
  },
  {
    name: "Page F",
    value: 856400,
    amt: 2500,
  },
  {
    name: "Page G",
    value: 756400,
    amt: 2100,
  },
];

const PriceContainer = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 20px;
  align-items: center;
  color: ${(props) => (props.color ? palatte.UP_COLOR : palatte.DOWN_COLOR)};
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
  border-bottom: 16px solid ${palatte.UP_COLOR};
  margin-right: 10px;
`;

const TriangleDown = styled(TriangleUp)`
  border-bottom: 0;
  border-top: 16px solid ${palatte.DOWN_COLOR};
`;

const Secondhand = () => {
  const prevItem = data[data.length - 2];
  const lastItem = data[data.length - 1];
  const figure = (lastItem.value - prevItem.value) * 0.01;
  const isBoolean = figure > 0 ? true : false;

  return (
    <ReviewLayout title="중고가격" icon={faCoins}>
      <PriceContainer color={isBoolean}>
        <Price>{lastItem.value.toLocaleString("ko-kr")} 원</Price>
        {prevItem.value <= lastItem.value ? <TriangleUp /> : <TriangleDown />}
        <div>{figure.toFixed(2)}%</div>
      </PriceContainer>
      <ResponsiveContainer width="99%" height={200}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="6" vertical={false} />
          <YAxis
            tick={{
              fill: `${palatte.SUB_COLOR}`,
              fontWeight: "bold",
              fontSize: 15,
            }}
            tickFormatter={formatData}
          />
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
            dataKey="value"
            stroke={palatte.MAIN_COLOR}
            fill={palatte.MAIN_COLOR}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ReviewLayout>
  );
};

export default Secondhand;
