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
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  color: #92abcf;
`;

interface Props {}

const AvgPrice: React.FC<Props> = () => {
  return (
    <Title title="평균가격" icon={faCoins}>
      <Body>
        <Content>
          <div>1000</div>
        </Content>
      </Body>
    </Title>
  );
};

export default AvgPrice;
