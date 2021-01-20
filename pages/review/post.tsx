import { useState, Fragment } from "react";
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const register = () => {
  const [reviewState, setReviewState] = useState({
    title: "",
    content: "",
    gender: "",
    age: "",
  });

  const [surveyState, setSurveyState] = useState({
    tech: "",
    price: "",
    brand: "",
  });

  const router: NextRouter = useRouter();

  const onSubmit = (event: any) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/review", {
        data: { reviewState, surveyState },
      })
      .then((res) => {
        const { status } = res;

        if (status === 201) {
          router.push("/review");
        }
      });
  };

  const onChange = (event: any) => {
    const { name, value } = event.target;

    setReviewState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSurveyChange = (event: any) => {
    const { name, value } = event.target;

    setSurveyState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const ages = [
    { label: "10 ~19", id: "10", value: "10" },
    { label: "20 ~ 29", id: "20", value: "20" },
    { label: "30 ~ 39", id: "30", value: "30" },
    { label: "40 ~ 49", id: "40", value: "40" },
    { label: "50 ~", id: "50", value: "50" },
  ];

  const techs = [
    { label: "매우 불만족", id: "tech_1", value: "1" },
    { label: "불만족", id: "tech_2", value: "2" },
    { label: "보통", id: "tech_3", value: "3" },
    { label: "만족", id: "tech_4", value: "4" },
    { label: "매우 만족", id: "tech_5", value: "5" },
  ];

  const prices = [
    { label: "매우 불만족", id: "price_1", value: "1" },
    { label: "불만족", id: "price_2", value: "2" },
    { label: "보통", id: "price_3", value: "3" },
    { label: "만족", id: "price_4", value: "4" },
    { label: "매우 만족", id: "price_5", value: "5" },
  ];

  const brands = [
    { label: "매우 불만족", id: "brand_1", value: "1" },
    { label: "불만족", id: "brand_2", value: "2" },
    { label: "보통", id: "brand_3", value: "3" },
    { label: "만족", id: "brand_4", value: "4" },
    { label: "매우 만족", id: "brand_5", value: "5" },
  ];

  return (
    <div>
      <Link href="/review">
        <button>이전으로</button>
      </Link>

      <form onSubmit={onSubmit}>
        <div>
          <div>제목을 입력해주세요.</div>
          <input
            type="text"
            placeholder="title"
            id="title"
            name="title"
            onChange={onChange}
          />
        </div>

        <div>
          <div>성별을 선택해주세요.</div>
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
        </div>

        <div>
          <div>나이를 선택해주세요.</div>
          {ages.map((age) => (
            <Fragment>
              <label htmlFor={age.id}>{age.label}</label>
              <input
                type="radio"
                id={age.id}
                name="age"
                value={age.value}
                onChange={onChange}
              />
            </Fragment>
          ))}
        </div>

        <div>
          <div>기능에 대한 만족도를 선택해주세요.</div>
          {techs.map((tech) => (
            <Fragment>
              <label htmlFor={tech.id}>{tech.label}</label>
              <input
                type="radio"
                id={tech.id}
                name="tech"
                value={tech.value}
                onChange={onSurveyChange}
              />
            </Fragment>
          ))}
        </div>

        <div>
          <div>가격에 대한 만족도를 선택해주세요.</div>
          {prices.map((price) => (
            <Fragment>
              <label htmlFor={price.id}>{price.label}</label>
              <input
                type="radio"
                id={price.id}
                name="price"
                value={price.value}
                onChange={onSurveyChange}
              />
            </Fragment>
          ))}
        </div>

        <div>
          <div>브랜드에 대한 만족도를 선택해주세요.</div>
          {brands.map((brand) => (
            <Fragment>
              <label htmlFor={brand.id}>{brand.label}</label>
              <input
                type="radio"
                id={brand.id}
                name="brand"
                value={brand.value}
                onChange={onSurveyChange}
              />
            </Fragment>
          ))}
        </div>

        <div>
          <div>리뷰를 작성해주세요.</div>
          <input
            type="text"
            placeholder="리뷰를 작성해주세요."
            name="content"
            onChange={onChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default register;
