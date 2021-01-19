import Link from "next/link";
import axios from "axios";

const Button = ({ onClick }) => (
  <button onClick={onClick}>Get Data From Server</button>
);

const index = () => {
  const onClick = () => {
    axios
      .get("http://localhost:8000/review/6004622941424853fc16ad37")
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <h1>hello world</h1>
      <Link href="/hello">
        <a title="hello">Hello Page</a>
      </Link>
      <Button onClick={onClick} />
    </div>
  );
};

export default index;
