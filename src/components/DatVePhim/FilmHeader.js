import React from "react";
import { useSelector } from "react-redux";
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
  const {ngayChieu} = useSelector(rootReducer => rootReducer.DatVePhimReducer);

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
          <b>Thứ {ngayChieu.getDay()+1},</b> ngày {ngayChieu.getDate()}/{ngayChieu.getMonth()+1}/{ngayChieu.getFullYear()}
        </HeaderMainText>
        <HeaderSubText>ngày hôm nay</HeaderSubText>
      </div>
    </FilmHeaderStyled>
  );
}
