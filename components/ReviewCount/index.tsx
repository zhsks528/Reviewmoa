interface Props {
  reviewCount: Number;
}

const ReviewCount: React.FC<Props> = ({ reviewCount }) => {
  return (
    <div>
      <div>리뷰 갯수</div>
      <div>{reviewCount}</div>
    </div>
  );
};

export default ReviewCount;
