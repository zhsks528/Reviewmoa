import styled, { keyframes } from "styled-components";
import ReviewLayout from "components/ReviewLayout";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { withStyles } from "@material-ui/core/styles";
import palatte from "styles/palattes";

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 75px);
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  color: ${palatte.SUB_COLOR};
`;

const Count = styled.div`
  margin-left: 5px;
`;

const ProgressContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 65%;
  height: 10px;
  margin: 0 2px;
  background: ${palatte.SUB_COLOR};
  vertical-align: -1px;
`;

const progressbar = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 77%;
  }
`;

const ProgressContent = styled.span`
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  height: 10px;
  background: ${palatte.MAIN_COLOR};
  border-radius: inherit;
  line-height: 9999px;
  width: 77%;
  animation: ${progressbar} 2s ease-out;
`;

const DetailContainer = styled.div`
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ScoreContainer = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const TotalContainer = styled.div`
  display: flex;
`;

const StyledRating = withStyles({
  iconFilled: {
    color: `${palatte.MAIN_COLOR}`,
  },
})(Rating);

const Score = () => {
  const scores = [5, 4, 3, 2, 1];

  return (
    <DetailContainer>
      {scores.map((score, index) => (
        <ScoreContainer key={index}>
          <span>{score}점</span>
          <ProgressContainer>
            <ProgressContent />
          </ProgressContainer>
          <span>77%</span>
        </ScoreContainer>
      ))}
    </DetailContainer>
  );
};

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
          <TotalContainer>
            <div>{Number(star.toFixed(1))}</div>
            <Count>({data.length})</Count>
          </TotalContainer>
          <StyledRating
            name="customized-empty"
            defaultValue={Number(star.toFixed(1))}
            precision={0.5}
            emptyIcon={
              <StarBorderIcon
                fontSize="inherit"
                stroke="rgb(17,236,229)"
                strokeWidth="0.5"
              />
            }
            readOnly
          />
          <Score />
        </Content>
      </Body>
    </ReviewLayout>
  );
};

export default RatingChart;
