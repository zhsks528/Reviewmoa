import styled from "styled-components";
import Header from "components/Header";
import Search from "components/Search";

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1200px;
  min-width: 300px;
  margin: 70px auto 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  padding-top: 200px;
  margin-bottom: 20px;
  font-size: 50px;
  color: rgb(17, 236, 229);
  min-width: 300px;
`;

const SubContainer = styled.div`
  color: white;
  margin-bottom: 40px;
  min-width: 300px;
`;

const Index = () => {
  return (
    <Wrapper>
      <Header />
      <TitleContainer>
        <h2>REVIEW MOA</h2>
      </TitleContainer>
      <SubContainer>
        <div>상품에 대한 리뷰를 한 곳에서 보자</div>
      </SubContainer>
      <Search />
    </Wrapper>
  );
};

export default Index;
