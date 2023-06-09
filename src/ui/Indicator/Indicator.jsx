import s from "./Indicator.module.css";
import styled from "styled-components";

const IndicateBar = styled.span`
  display: inline-block;
  position: absolute;
  background: ${(props) => props.color};
  height: 6px;
  width: ${(props) => props.progress};
  border-radius: 12px;
`;

export const Indicator = ({ progress, color }) => {
  return (
    <div className={s.indicator}>
      <IndicateBar progress={progress} color={color} />
    </div>
  );
};
