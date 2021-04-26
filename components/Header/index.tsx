import Link from "next/link";
import styled from "styled-components";
import Search from "components/Search";
import palatte from "styles/palattes";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 27%) 0px 2px 3px 2px;
  background-color: rgb(33, 44, 61);
  z-index: 9999;
`;

const Title = styled.div`
  font-size: 30px;
  color: ${palatte.MAIN_COLOR};
  cursor: pointer;

  &:hover {
    color: #0dfff7;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Link href={`/`}>
        <Title>REVIEW MOA</Title>
      </Link>
      <Search />
      <div>로그인</div>
    </Wrapper>
  );
};

export default Header;
