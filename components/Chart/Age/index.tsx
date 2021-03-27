import styled from "styled-components";
import ReviewLayout from "components/ReviewLayout";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

const Content = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  color: #92abcf;
`;

const TooltipCustom = styled.div`
  background: black;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  opacity: 0.75;
  color: white;
`;

const TooltipTitle = styled.div`
  font-weight: bold;
`;

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <TooltipCustom>
        <TooltipTitle>제품 구입자 수</TooltipTitle>
        <span>{label} : </span>
        {payload ? <span>{` ${payload[0].value}`}</span> : <span>0</span>}
      </TooltipCustom>
    );
  }

  return null;
};

type reviewProps = {
  age: number;
};

type AgeType = {
  id: string;
  reviewState: reviewProps;
};

interface Props {
  ages: any[];
}

const AgeChart: React.FC<Props> = ({ ages }) => {
  let agecounts = [0, 0, 0, 0, 0];

  ages.map((data) => {
    if (data.reviewState.age < 20) {
      agecounts[0] += 1;
    } else if (data.reviewState.age >= 20 && data.reviewState.age < 30) {
      agecounts[1] += 1;
    } else if (data.reviewState.age >= 30 && data.reviewState.age < 40) {
      agecounts[2] += 1;
    } else if (data.reviewState.age >= 40 && data.reviewState.age < 50) {
      agecounts[3] += 1;
    } else {
      agecounts[4] += 1;
    }
  });

  const dataset = [
    {
      name: "10대",
      나이: agecounts[0],
    },
    {
      name: "20대",
      나이: agecounts[1],
    },
    {
      name: "30대",
      나이: agecounts[2],
    },
    {
      name: "40대",
      나이: agecounts[3],
    },
    {
      name: "50대 이상",
      나이: agecounts[4],
    },
  ];

  return (
    <ReviewLayout title="연령별" icon={faChartBar}>
      <Body>
        <ResponsiveContainer width="99%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={dataset}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#92ABCF" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#92ABCF", fontWeight: "bold", fontSize: 15 }}
            />
            <YAxis
              tick={{ fill: "#92ABCF", fontWeight: "bold", fontSize: 15 }}
            />
            <Tooltip
              cursor={{
                stroke: "#0DE6ff",
                fill: "#0DE6ff",
                opacity: 0.15,
              }}
              filterNull={false}
              content={<CustomTooltip />}
              isAnimationActive={true}
            />
            <Legend />
            <Bar
              dataKey="나이"
              fill="#11ECE5"
              legendType="circle"
              barSize={40}
              isAnimationActive={true}
            />
          </BarChart>
        </ResponsiveContainer>
      </Body>
    </ReviewLayout>
  );
};

export default AgeChart;
