import axios from "axios";
import { useState } from "react";
import { useRouter, NextRouter } from "next/router";

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
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={onClick}>검색</button>
    </div>
  );
};

export default index;
