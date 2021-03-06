import styled from "styled-components";
import ReviewLayout from "components/ReviewLayout";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import CustomTooltip from "components/CustomTooltip";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import palatte from "styles/palattes";

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

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
            <CartesianGrid strokeDasharray="6 6" stroke={palatte.SUB_COLOR} />
            <XAxis
              dataKey="name"
              tick={{
                fill: `${palatte.SUB_COLOR}`,
                fontWeight: "bold",
                fontSize: 15,
              }}
            />
            <YAxis
              tick={{
                fill: `${palatte.SUB_COLOR}`,
                fontWeight: "bold",
                fontSize: 15,
              }}
            />
            <Tooltip
              cursor={{
                stroke: "#0DE6ff",
                fill: "#0DE6ff",
                opacity: 0.15,
              }}
              filterNull={false}
              content={
                <CustomTooltip active payload label title="제품 구입자 수" />
              }
              isAnimationActive={true}
            />
            <Bar
              dataKey="나이"
              fill={palatte.MAIN_COLOR}
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
