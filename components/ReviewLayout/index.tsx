import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CardContainer = styled.section`
  height: 100%;
  padding: 10px;
  min-width: 250px;
  position: relative;
  background: rgb(11, 18, 30);
  border: 1px solid rgb(33, 50, 78);
  border-radius: 4px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 6px 0px 6px 3px;
  margin-bottom: 20px;
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
