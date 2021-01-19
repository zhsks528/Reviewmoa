import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const register = () => {
  const [reviewState, setReviewState] = useState({
    name: "",
    gender: "",
    age: "",
    content: "",
  });

  const router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/review", { data: reviewState })
      .then((res) => {
        const { status } = res;

        if (status === 201) {
          router.push("/review");
        }
      });
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setReviewState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Link href="/review">
        <button>이전으로</button>
      </Link>
      <form onSubmit={onSubmit}>
        <div>이름을 입력해주세요.</div>
        <input
          type="text"
          placeholder="name"
          id="name"
          name="name"
          onChange={onChange}
        />

        <label htmlFor="female">여성</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="여성"
          onChange={onChange}
        />
        <label htmlFor="male">남성</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="남성"
          onChange={onChange}
        />

        <label htmlFor="10">10대</label>
        <input type="radio" id="10" name="age" value="10" onChange={onChange} />
        <label htmlFor="20">20대</label>
        <input type="radio" id="20" name="age" value="20" onChange={onChange} />
        <label htmlFor="30">30대</label>
        <input type="radio" id="30" name="age" value="30" onChange={onChange} />
        <label htmlFor="40">40대</label>
        <input type="radio" id="40" name="age" value="40" onChange={onChange} />
        <label htmlFor="50">50대</label>
        <input type="radio" id="50" name="age" value="50" onChange={onChange} />

        <input
          type="text"
          placeholder="리뷰를 작성해주세요."
          name="content"
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default register;
