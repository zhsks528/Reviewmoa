import axios from "axios";
import { useState } from "react";
import { useRouter, NextRouter } from "next/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1200px;
  min-width: 300px;
  margin: 0 auto;
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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: none;
  border-radius: 24px;
  height: 44px;
  margin: 0 auto;
  padding: 0 30px;
  min-width: 300px;
  max-width: 584px;
`;

const SearchLeft = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px 0;
`;

const SearchRight = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 20px;
`;

const SearchDelBtn = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

const index = () => {
  const [query, setQuery] = useState("");
  const router: NextRouter = useRouter();

  const onClick = () => {
    axios
      .get(`http://localhost:8000/search/${query}`)
      .then((res) => {
        const { status } = res;

        if (status === 200) {
          router.push({
            pathname: `/product/${query}`,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setQuery(value);
  };

  return (
    <Wrapper>
      <TitleContainer>
        <h2>REVIEW MOA</h2>
      </TitleContainer>
      <SubContainer>
        <div>상품에 대한 리뷰를 한 곳에서 훑어보자</div>
      </SubContainer>
      <SearchContainer>
        <SearchLeft>
          <SearchInput
            type="text"
            onChange={handleChange}
            placeholder="상품이름을 입력해주세요."
          />
          <SearchDelBtn>
            <FontAwesomeIcon icon={faTimes} />
          </SearchDelBtn>
        </SearchLeft>

        <SearchRight>
          <FontAwesomeIcon icon={faSearch} onClick={onClick} />
        </SearchRight>
      </SearchContainer>
    </Wrapper>
  );
};

export default index;
