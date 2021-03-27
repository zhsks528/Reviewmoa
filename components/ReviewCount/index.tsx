import styled from "styled-components";
import ReviewLayout from "components/ReviewLayout";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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

const ReviewCount: React.FC = () => {
  return (
    <ReviewLayout title="추가예정" icon={faPlus}>
      <Body>
        <Content>
          <div>추가예정</div>
        </Content>
      </Body>
    </ReviewLayout>
  );
};

export default ReviewCount;
