import React, { useState } from "react";
import styled from "styled-components";

const DateItemStyled = styled.div`
  background-color: #f7f8f7;
  max-width: 65px;
  margin: 0px 5px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  & i {
    font-size: 10px;
    color: white;
  }
  & p:first-of-type {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }
  & p:last-of-type {
    font-weight: bold;
    font-size: 12px;
    opacity: 0.6;
    padding-bottom: 10px;
    text-transform: capitalize;
  }
  &::before,
  &::after {
    content: ".";
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    left: -7px;
    bottom: -4px;
    color: white;
    font-size: 60px;
  }
  &::after {
    left: auto;
    right: -7px;
  }
  &:hover,
  &.active {
    background-color: #76c3ea;
    color: white;
    & p:last-of-type {
      opacity: 1;
    }
    &::before,
    &::after {
      opacity: 1;
    }
  }
`;

export default function DateItem(props) {
  const [selected, setSelected] = useState(false);
  let { date } = props;
  const arrDay = [
    "chủ nhật",
    "thứ hai",
    "thứ ba",
    "thứ tư",
    "thứ năm",
    "thứ sáu",
    "thứ bảy",
  ];
  return (
    <div className="text-center">
      <DateItemStyled
        className={selected === true ? "active" : ""}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        <i className="fas fa-circle"></i>
        <p>{date.getDate()}</p>
        <p>{arrDay[date.getDay()]}</p>
      </DateItemStyled>
    </div>
  );
}
