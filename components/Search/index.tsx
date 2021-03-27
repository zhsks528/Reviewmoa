import { useState } from "react";
import { useRouter, NextRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";

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
  color: black;
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
  color: black;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const router: NextRouter = useRouter();

  const handleSearch = (): void => {
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

  const handleEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleDelete = (): void => {
    setQuery("");
  };

  return (
    <SearchContainer>
      <SearchLeft>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder="상품이름을 입력해주세요."
        />
        <SearchDelBtn>
          <FontAwesomeIcon icon={faTimes} onClick={handleDelete} />
        </SearchDelBtn>
      </SearchLeft>

      <SearchRight>
        <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
      </SearchRight>
    </SearchContainer>
  );
};

export default Search;
