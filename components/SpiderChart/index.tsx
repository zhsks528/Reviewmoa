import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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

interface Props {
  data: any;
}

const SpiderChart: React.FC<Props> = ({ data }) => {
  let techTotal = 0;
  let priceTotal = 0;
  let brandTotal = 0;

  const length = data.length;

  data.map((item) => {
    techTotal += item.surveyState.tech;
    priceTotal += item.surveyState.price;
    brandTotal += item.surveyState.brand;
  });

  const techAvg = Number((techTotal / length).toFixed(2));
  const priceAvg = Number((priceTotal / length).toFixed(2));
  const brandAvg = Number((brandTotal / length).toFixed(2));

  const dataset = [
    {
      name: "기술",
      average: techAvg,
      fullMark: 5,
    },
    {
      name: "가격",
      average: priceAvg,
      fullMark: 5,
    },
    {
      name: "브랜드",
      average: brandAvg,
      fullMark: 5,
    },
    {
      name: "추가예정1",
      average: 3,
      fullMark: 5,
    },
    {
      name: "추가예정2",
      average: 2,
      fullMark: 5,
    },
    {
      name: "추가예정3",
      average: 5,
      fullMark: 5,
    },
  ];

  return (
    <CardContainer>
      <Header>
        <IconContainer>
          <FontAwesomeIcon icon={faBullseye} />
        </IconContainer>
        <Title>제품 분석</Title>
      </Header>
      <Body>
        <ResponsiveContainer width="99%" height={300}>
          <RadarChart outerRadius={100} data={dataset}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="name"
              tick={{
                fill: "#92abcf",
                fontWeight: "bold",
                fontSize: 15,
              }}
            />
            <PolarRadiusAxis domain={[0, 5]} />
            <Radar
              name="점수"
              dataKey="average"
              stroke="#11ece5"
              fill="#11ece5"
              fillOpacity={0.5}
              isAnimationActive={false}
            />
            <Tooltip
              isAnimationActive={false}
              content={<CustomTooltip title="제품 분석" />}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Body>
    </CardContainer>
  );
};

export default SpiderChart;
