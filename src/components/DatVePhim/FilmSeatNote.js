import React from 'react'
import styled from 'styled-components';

const SeatStyled = styled.div`
  display: inline-block;
  width: 28px;
  height: 20px;
  border-radius: 7px;
  background-color: #e0e2e1;
  position: relative;
  transition: 0.5s;
  margin: 0px 5px;
  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 4px;
    border-radius: 4px;
    background-color: #e0e2e1;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    bottom: -6px;
    transition: 0.5s;
  }
  &.active {
    background-color: #f14231;
    &::after {
      background-color: #f14231;
    }
  }
  &.buyout {
    background-color: #76c3ea;
    &::after {
      background-color: #76c3ea;
    }
  }
  &.reserved {
    background-color: #5a5e61;
    &::after {
      background-color: #5a5e61;
    }
  }
`;
const SeatNoteStyled = styled.div`
  border: 1px solid #ebe9e9;
  padding: 15px 20px;
  border-radius: 10px;
`;
export default function FilmSeatNote() {
    return (
        <div style={{ padding: "0 40px" }}>
        <p className="font-weight-bold">Ghi chú</p>
        <SeatNoteStyled className="d-flex justify-content-between" styled={{}}>
          <div>
            <SeatStyled />
            <span
              className="text-uppercase font-weight-bold ml-2"
              style={{ fontSize: "12px", color: "#5A5E61" }}
            >
              Ghế trống
            </span>
          </div>
          <div>
            <SeatStyled className="active" />
            <span
              className="text-uppercase font-weight-bold ml-2"
              style={{ fontSize: "12px", color: "#5A5E61" }}
            >
              Ghế đang chọn
            </span>
          </div>
          <div>
            <SeatStyled className="buyout" />
            <span
              className="text-uppercase font-weight-bold ml-2"
              style={{ fontSize: "12px", color: "#5A5E61" }}
            >
              Ghế đã đặt
            </span>
          </div>
        </SeatNoteStyled>
      </div>
    )
}
