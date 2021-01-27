import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const CardContainer = styled.div`
  border-radius: 4px;
  margin: 8px 12px;
  padding: 4px 8px;
  flex: 1 0 18%;
  min-width: 250px;
  position: relative;
  background: rgb(29, 38, 54);
`;

const Header = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  align-content: center;
  padding: 6px 0px 6px 3px;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 15px;
  display: flex;
  place-content: center;
  align-items: center;
  color: rgb(17, 236, 229);
`;

const Title = styled.h2`
  margin-left: 7px;
  font-size: 15px;
  color: rgb(17, 236, 229);
  line-height: 1em;
`;

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
    <CardContainer>
      <Header>
        <IconContainer>
          <FontAwesomeIcon icon={faChartBar} />
        </IconContainer>
        <Title>연령별</Title>
      </Header>
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
              isAnimationActive={false}
            />
            <Legend />
            <Bar
              dataKey="나이"
              fill="#11ECE5"
              legendType="circle"
              barSize={40}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </Body>
    </CardContainer>
  );
};

export default AgeChart;
