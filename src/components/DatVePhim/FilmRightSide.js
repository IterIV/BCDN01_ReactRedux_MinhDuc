import React, { useState } from "react";
import styled from "styled-components";
import FilmTotalSeatCost from "./FilmTotalSeatCost";
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css'
const pdLeftAndRight = 30;

const FilmInfoStyled = styled.div`
  width: 400px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid #efefef;
`;

const ImageStyled = styled.img`
  width: 100%;
  mask-image: linear-gradient(black, white, transparent);
  -webkit-mask-image: linear-gradient(black, white, transparent);
`;
const TotalTimeStyled = styled.div`
  font-size: 12px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 5px 10px;
  position: absolute;
  top: 335px;
  left: 15px;
  border-radius: 5px;
  font-weight: bold;
  & i {
    color: #f7542e;
  }
`;
const FilmNameStyled = styled.div`
  padding-left: ${pdLeftAndRight}px;
  padding-right: ${pdLeftAndRight}px;
  margin-bottom: 25px;
  & h1 {
    font-size: 18px;
    font-weight: bold;
  }
  & p {
    opacity: 0.5;
    margin-bottom: 0px;
  }
`;
const ButtonPlayStyled = styled.button`
  background-color: #f14837;
  color: white;
  border-radius: 10px;
  position: relative;
  padding: 5px 10px;
  border: none;
  transition: 0.5s;
  filter: drop-shadow(4px 5px 12px #f18c81);
  &::before {
    content: "";
    position: absolute;
    border: 1px solid #f6d8d6;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 10px;
    top: -5px;
    left: -5px;
    background-color: transparent;
    transition: 0.3s;
  }
  & i {
    font-size: 14px;
  }
  &:hover {
    background-color: #dd2b19;
    &::before {
      border-color: #f5b4b0;
    }
  }
  &:active {
    &::before {
      border-width: 4px;
    }
  }
`;
const FilmDescStyled = styled.p`
  padding-left: ${pdLeftAndRight}px;
  padding-right: ${pdLeftAndRight}px;
  opacity: 0.7;
  font-size: 14px;
  line-height: 1.8;
  display: -webkit-box;
  text-align: justify;
  -webkit-line-clamp: ${(props) => props.numShow};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: auto;
`;
export default function FilmRightSide() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <FilmInfoStyled>
        <ImageStyled
          src="https://avatar-ex-swe.nixcdn.com/playlist/2013/12/04/a/c/b/4/1386150620827_500.jpg"
          alt="..."
        />
        <TotalTimeStyled>
          <i className="far fa-clock"></i> <span>120 ph??t</span>
        </TotalTimeStyled>
        <FilmNameStyled>
          <div className="row align-items-center">
            <div className="col-8">
              <h1>IRON MAN 3</h1>
              <p>Phi??u l??u - H??nh ?????ng</p>
            </div>
            <div className="col-4 text-right">
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Ke1Y3P9D0Bc" onClose={() => setOpen(false)} />
              <ButtonPlayStyled onClick={()=> setOpen(true)}>
                <i className="fas fa-play"></i>
              </ButtonPlayStyled>
            </div>
          </div>
        </FilmNameStyled>
        <FilmDescStyled numShow="4">
          <b>Iron Man 3</b> ti???p t???c c??u truy???n t??? sau nh???ng s??? ki???n v?? nh???ng
          tr???n chi???n ?????y ??m ???nh trong The Avengers, Tony Stark quay v??? ??? ???n
          trong c??n bi???t th??? sang tr???ng c???a m??nh, t???m th???i ch??? ?????i trong t?? c??ch
          m???t t??? ph?? gi??u c?? ???????c y??u m???n v?? g??c danh ph???n si??u anh h??ng sang
          m???t b??n. Tuy nhi??n, nh???ng hi???m h???a m???i l???i ti???p t???c xu???t hi???n d?????i
          b??ng ma bao tr??m c???a m???t qu??i nh??n, ?????ng th???i c??ng l?? m???t thi??n t??i v???
          c??ng ngh??? - The Mandarin. Ng?????i b???n th??n trong l???c l?????ng qu??n ?????i Hoa
          K??? c???a Tony - James Rhodes c???n t???i s??? gi??p ????? c???a anh v?? nh???ng b??? gi??p
          si??u vi???t. M???i chuy???n kh??ng h??? d??? d??ng nh?? Tony v?? James t?????ng t?????ng:
          d?????i s???c m???nh th???n b?? c???a m?????i chi???c nh???n v?? tr???, The Mandarin ???? ????nh
          b???i "Ng?????i S???t", ?????ng th???i khi???n si??u anh h??ng - t??? ph?? tr??? th??nh k???
          m???t tr?? nh???...
        </FilmDescStyled>
        <FilmTotalSeatCost/>
      </FilmInfoStyled>
     
    </div>
  );
}
