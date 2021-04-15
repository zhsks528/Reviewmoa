import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 70%;
  background-color: white;
  color: black;
`;

const TitleContainer = styled.div`
  color: rgb(55, 53, 47);
  font-weight: 700;
  line-height: 1.2;
  font-size: 40px;
  cursor: text;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 3px 2px;
  border: none;
  outline: none;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
`;

interface ModalProps {
  close: () => void;
}

const ReviewCount: React.FC<ModalProps> = ({ close }) => {
  return (
    <Wrapper>
      <Overlay onClick={close}></Overlay>
      <Container>
        <TitleContainer>
          <Title
            contentEditable="true"
            spellCheck="true"
            placeholder="제품명을 입력해주세요."
            data-root="true"
          ></Title>
        </TitleContainer>
        <div onClick={close}>X</div>
        <header>
          <div>상품명(name)</div>
        </header>
        <div>가격(price)</div>
        <div>간력소개(info)</div>
        <div>추가하기</div>
      </Container>
    </Wrapper>
  );
};

export default ReviewCount;
