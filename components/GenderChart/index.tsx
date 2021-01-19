interface Props {
  data: any;
}

const GenderChart: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div>성별</div>
      <div>
        {data.male} {data.female}
      </div>
    </div>
  );
};

export default GenderChart;
