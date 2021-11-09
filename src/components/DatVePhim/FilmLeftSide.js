import React from "react";
import styled from "styled-components";
import FilmDateSlider from "./FilmDateSlider";
import FilmHeader from "./FilmHeader";
import FilmListSeat from "./FilmListSeat";
import FilmSeatNote from "./FilmSeatNote";

const LeftSideStyled = styled.div`
  margin-right: 400px;
  display: block;
  margin-bottom: 20px;
`;


export default function FilmLeftSide() {
  return (
    <LeftSideStyled>
      <FilmHeader/>
      <FilmDateSlider/>
      <FilmListSeat/>
      <FilmSeatNote/>
    </LeftSideStyled>
  );
}
