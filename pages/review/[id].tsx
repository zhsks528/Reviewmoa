import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const detail = () => {
  const router = useRouter();
  const [review, setReview] = useState({
    name: "",
    age: 0,
    gender: "",
    content: "",
  });

  useEffect(() => {
    const { query } = router;

    axios
      .get(`http://localhost:8000/review/${query.id}`)
      .then((res) => {
        const { data } = res;

        setReview(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <div>{review.name}</div>
        <div>{review.gender}</div>
        <div>{review.age}</div>
        <div>{review.content}</div>
      </div>

      <Link href="/review">
        <button>돌아가기</button>
      </Link>
    </div>
  );
};

export default detail;
