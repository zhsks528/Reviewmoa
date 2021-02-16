import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";

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
    <CardContainer>
      <Header>
        <IconContainer>
          <FontAwesomeIcon icon={faStar} />
        </IconContainer>
        <Title>총점</Title>
      </Header>
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
    </CardContainer>
  );
};

export default RatingChart;
