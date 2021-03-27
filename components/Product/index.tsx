import styled from "styled-components";
import ReviewLayout from "components/ReviewLayout";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

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

interface Props {}

const AvgPrice: React.FC<Props> = () => {
  return (
    <ReviewLayout title="이미지" icon={faCoins}>
      <Body>
        <Content>
          <div>사진</div>
        </Content>
      </Body>
    </ReviewLayout>
  );
};

export default AvgPrice;
