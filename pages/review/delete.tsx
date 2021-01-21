import Link from "next/link";
interface Props {}

const Delete: React.FC<Props> = () => {
  return (
    <div>
      <Link href="/review">
        <button>글 목록</button>
      </Link>
      <div>삭제 페이지</div>;
    </div>
  );
};

export default Delete;
