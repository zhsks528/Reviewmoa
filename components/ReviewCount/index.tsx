import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

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
interface Props {
  data: any;
}

const ReviewCount: React.FC<Props> = ({ data }) => {
  const count = data.length;

  return (
    <CardContainer>
      <Header>
        <IconContainer>
          <FontAwesomeIcon icon={faUsers} />
        </IconContainer>
        <Title>리뷰수</Title>
      </Header>
      <Body>
        <Content>
          <div>{count}</div>
        </Content>
      </Body>
    </CardContainer>
  );
};

export default ReviewCount;
