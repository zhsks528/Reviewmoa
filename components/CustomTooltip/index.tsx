import styled from "styled-components";

const TooltipCustom = styled.div`
  background: black;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  opacity: 0.75;
  color: white;
`;

const TooltipTitle = styled.div`
  font-weight: bold;
`;

interface Props {
  title: String;
  active: any;
  payload: any;
  label: any;
}

const CustomTooltip: React.FC<Props> = ({ title, active, payload, label }) => {
  if (active && payload) {
    return (
      <TooltipCustom>
        <TooltipTitle>{title}</TooltipTitle>
        <span>{label} : </span>
        {payload ? <span>{` ${payload[0].value}`}</span> : <span>0</span>}
      </TooltipCustom>
    );
  }

  return null;
};

export default CustomTooltip;
