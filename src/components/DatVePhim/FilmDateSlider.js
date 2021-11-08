import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import DateSliderArrow from "./DateSliderArrow";
import DateItem from "./DateItem";

const settings = {
  slidesToShow: 8,
  slidesToScroll: 1,
  infinite: false,
  nextArrow: <DateSliderArrow side="right" />,
  prevArrow: <DateSliderArrow side="left" />,
};

const Wrapper = styled.div`
  padding: 0px 40px;
  & .slick-list {
  }
`;

const renderDate = (numDays) => {
  let arrDate = [];
  let today = new Date();
  for (let index = 0; index <= numDays; index++) {
    let newDay = new Date();
    newDay.setDate(today.getDate() + index);
    arrDate.push(newDay);
  }

  return arrDate.map((item, index) => {
    return <DateItem key={index} date={item} />;
  });
  //   let dayIndex = arrDay[today.getDay() - 1];
};
export default function FilmDateSlider() {
  return (
    <Wrapper>
      <Slider {...settings}>{renderDate(10)}</Slider>
    </Wrapper>
  );
}
