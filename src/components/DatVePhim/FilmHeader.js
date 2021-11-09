import React from "react";
import styled from "styled-components";

const FilmHeaderStyled = styled.div`
  margin-bottom: 20px;
`;
const HeaderMainText = styled.p`
  margin-bottom: 0;
`;
const HeaderSubText = styled.p`
  font-size: 14px;
  opacity: 0.6;
`;
export default function FilmHeader() {
  const arrDay = [
    "chủ nhật",
    "thứ hai",
    "thứ ba",
    "thứ tư",
    "thứ năm",
    "thứ sáu",
    "thứ bảy",
  ];
  let toDay = new Date();
  return (
    <FilmHeaderStyled className="row">
      <div className="col-6 text-left">
        <HeaderMainText>
          <b>19:45</b>, Vincom Plaza Đà Nẵng
        </HeaderMainText>
        <HeaderSubText>mua vé trực tuyến</HeaderSubText>
      </div>
      <div className="col-6 text-right">
        <HeaderMainText>
          <b style={{textTransform: "capitalize"}}>{arrDay[toDay.getDay()]},</b> ngày {toDay.getDate()}/{toDay.getMonth()+1}/{toDay.getFullYear()}
        </HeaderMainText>
        <HeaderSubText>ngày hôm nay</HeaderSubText>
      </div>
    </FilmHeaderStyled>
  );
}
