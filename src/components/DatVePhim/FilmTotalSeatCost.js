import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ButtonCheckoutStyled = styled.button`
  width: 100%;
  border: 1px solid transparent;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: #f14837;
  color: white;
  font-weight: bold;
  box-shadow: rgb(164 58 45 / 30%) 0px 19px 38px,
    rgb(198 47 29 / 22%) 0px 15px 12px;
  transition: 0.5s;
  ${(props) => {
    if (props.disabled) {
      return ``;
    }
    return `&:hover {
        background-color: #dd2b19;
      }`;
  }}
`;

export default function FilmTotalSeatCost() {
  const { mangGheChon } = useSelector(
    (rootReducer) => rootReducer.DatVePhimReducer
  );
  let totalCost = 0;
  mangGheChon.map((item) => (totalCost += item.gia));
  return (
    <div style={{ padding: "0px 30px" }}>
      <p style={{ fontSize: "14px", opacity: "0.7" }}>
        <span style={{ fontWeight: "bold" }}>Thông tin </span> đặt vé
      </p>
      <div className="mb-4">
        <div className="row">
          <div className="col-6">
            <p style={{ fontWeight: "bold", opacity: "0.6" }}>
              Đã chọn ({mangGheChon.length} ghế):
            </p>
          </div>
          <div
            className="col-6 text-right"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {mangGheChon.map((item) => item.soGhe).join("-")}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p style={{ fontWeight: "bold", opacity: "0.6" }}>Tổng cộng:</p>
          </div>
          <div className="col-6 text-right">
            <b style={{ color: "#F14837", fontWeight: "bold" }}>
              {totalCost.toLocaleString()}
            </b>{" "}
            <span>VNĐ</span>
          </div>
        </div>
      </div>
      <ButtonCheckoutStyled disabled={mangGheChon.length > 0 ? false : true}>
        Thanh toán
      </ButtonCheckoutStyled>
    </div>
  );
}
