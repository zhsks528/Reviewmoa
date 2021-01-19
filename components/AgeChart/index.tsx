type AgeType = {
  id: string;
  age: string;
};

interface Props {
  ages: AgeType[];
}

const AgeChart: React.FC<Props> = ({ ages }) => {
  return (
    <div>
      <div>연령별 차트</div>
      <div>{ages}</div>
    </div>
  );
};

export default AgeChart;
