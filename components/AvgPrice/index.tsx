import styled from "styled-components";
import Title from "components/ReviewLayout";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 75px);
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #92abcf;
`;

const OutputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Text = styled.div`
  margin-right: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  color: ${(props) => (props.color ? "mediumseagreen" : "red")};
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
  border-bottom: 16px solid mediumseagreen;
  margin-right: 10px;
`;

const TriangleDown = styled(TriangleUp)`
  border-bottom: 0;
  border-top: 16px solid red;
`;

interface Props {}

const AvgPrice: React.FC<Props> = () => {
  const output = 1542311;
  const current = 1230333;
  const figure = (output - current) * 0.01;
  const isBoolean = figure > 0 ? true : false;

  return (
    <Title title="현재가격" icon={faCoins}>
      <Body>
        <Content>
          <PriceContainer color={isBoolean}>
            <Price>{current.toLocaleString("ko-KR")} 원</Price>
            {current <= output ? <TriangleUp /> : <TriangleDown />}
            <div>{figure.toFixed(2)}%</div>
          </PriceContainer>
          <OutputContainer>
            <Text>출고가</Text>
            <div>{output.toLocaleString("ko-KR")} 원</div>
          </OutputContainer>
        </Content>
      </Body>
    </Title>
  );
};

export default AvgPrice;
