import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import CustomTooltip from "components/CustomTooltip";

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

const Text = styled.text`
  font-weight: bold;
  color: "#1d2636";
`;

interface Props {
  data: any;
}

const GenderChart: React.FC<Props> = ({ data }) => {
  let man = 0;
  let woman = 0;

  for (let idx in data) {
    if (data[idx].reviewState.gender === "남성") {
      man += 1;
    } else {
      woman += 1;
    }
  }

  const dataset = [
    { name: "남성", value: man },
    { name: "여성", value: woman },
  ];

  const COLORS = ["#11ECE5", "#0088FE"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <Text
        x={x}
        y={y}
        fill="92ABCF"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </Text>
    );
  };

  return (
    <CardContainer>
      <Header>
        <IconContainer>
          <FontAwesomeIcon icon={faVenusMars} />
        </IconContainer>
        <Title>성별</Title>
      </Header>
      <Body>
        <ResponsiveContainer width="99%" height={300}>
          <PieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <Pie
              data={dataset}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              stroke="#1d2636"
              strokeWidth={5}
              dataKey="value"
              isAnimationActive={false}
            >
              {dataset.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip isAnimationActive={false} />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              iconSize={10}
              iconType="circle"
              wrapperStyle={{}}
            />
          </PieChart>
        </ResponsiveContainer>
      </Body>
    </CardContainer>
  );
};

export default GenderChart;
