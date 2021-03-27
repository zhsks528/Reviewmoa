import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CardContainer = styled.div`
  margin: 8px 12px;
  padding: 4px 8px;
  flex: 1 0 18%;
  min-width: 250px;
  position: relative;
  background: rgb(11, 18, 30);
  border: 1px solid rgb(33, 50, 78);
  border-radius: 4px;
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

const ReviewLayout = ({ title, icon, children }) => {
  return (
    <CardContainer>
      <Header>
        <IconContainer>
          <FontAwesomeIcon icon={icon} />
        </IconContainer>
        <Title>{title}</Title>
      </Header>
      {children}
    </CardContainer>
  );
};

export default ReviewLayout;
