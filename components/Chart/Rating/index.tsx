import styled from "styled-components";
import ReviewLayout from "components/ReviewLayout";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 75px);
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

const StyledRating = withStyles({
  iconFilled: {
    color: "rgb(17,236,229)",
  },
})(Rating);

interface Props {
  data: any;
}

const RatingChart: React.FC<Props> = ({ data }) => {
  const obj = data.map((item) => Object.values(item.surveyState));
  const objSum = obj.map((item) => item.reduce((a, b) => a + b) / 3);
  const objAvg = objSum.reduce((a, b) => a + b);
  const star = objAvg / data.length;

  return (
    <ReviewLayout title="총점" icon={faStar}>
      <Body>
        <Content>
          <StyledRating
            name="customized-color"
            defaultValue={Number(star.toFixed(1))}
            precision={0.5}
            readOnly
          />
        </Content>
      </Body>
    </ReviewLayout>
  );
};

export default RatingChart;
