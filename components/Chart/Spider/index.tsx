import styled from "styled-components";
import ReviewLayout from "components/ReviewLayout";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import CustomTooltip from "components/CustomTooltip";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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
    <ReviewLayout title="제품 분석" icon={faBullseye}>
      <Body>
        <ResponsiveContainer width="99%" height={300}>
          <RadarChart outerRadius={100} data={dataset}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="name"
              tick={{
                fill: `${palatte.SUB_COLOR}`,
                fontWeight: "bold",
                fontSize: 15,
              }}
            />
            <PolarRadiusAxis domain={[0, 5]} />
            <Radar
              name="점수"
              dataKey="average"
              stroke={palatte.MAIN_COLOR}
              fill={palatte.MAIN_COLOR}
              fillOpacity={0.5}
              isAnimationActive={true}
            />
            <Tooltip
              isAnimationActive={false}
              content={<CustomTooltip active payload label title="제품 분석" />}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Body>
    </ReviewLayout>
  );
};

export default SpiderChart;
