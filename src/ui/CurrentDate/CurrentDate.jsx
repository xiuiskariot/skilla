import styled from "styled-components";

export const CurrentDate = () => {
  const StyledDate = styled.div`
    font-size: 15px;
    line-height: 148%;
    color: #899cb1;
    
  `;
  const date = new Date().toLocaleDateString("ru", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  const dateString = date[0].toUpperCase() + date.slice(1, -1);
  return <StyledDate>{dateString}</StyledDate>;
};
