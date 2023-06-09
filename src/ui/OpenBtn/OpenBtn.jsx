import open from "./assets/open.svg";
import styled from "styled-components";
export const OpenBtn = () => {
  const OpenBtnStyled = styled.button`
    cursor: pointer;
    width: 23px;
    background: none;
    border: none
  `;
  return (
    <OpenBtnStyled>
      <img src={open} alt="open" />
    </OpenBtnStyled>
  );
};
