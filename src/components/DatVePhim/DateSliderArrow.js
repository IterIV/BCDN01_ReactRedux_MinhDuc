import React from "react";
import styled from "styled-components";

const ArrowStyled = styled.div`
  font-size: 18px;
  color: black;
  border: 1px solid #ebe9e9;
  width: 35px;
  border-radius: 10px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
  ${(props) => props.side}: -38px;
  &::before {
    content: none;
  }
  &:hover {
    color: white;
    background-color: #76c3ea;
    border: none;
  }
`;
export default function DateSliderArrow(props) {
  const { className, onClick } = props;
  return (
    <ArrowStyled className={className} onClick={onClick} side={props.side}>
      <i className={`fas fa-chevron-${props.side}`}></i>
    </ArrowStyled>
  );
}
