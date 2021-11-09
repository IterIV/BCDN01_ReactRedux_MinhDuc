import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { CHON_GHE } from "../../redux/Actions/DatVePhimTypes";

const Wrapper = styled.div`
  background-color: #fafbfa;
  width: 100%;
  padding-top: 30px;
  margin-bottom: 20px;
`;
const ScreenBackground = `background: linear-gradient(180deg, rgba(231,231,231,1) 0%, rgba(235,235,235,1) 47%, rgba(241,241,241,1) 100%);`;
const ScreenStyled = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  margin-bottom: 40px;
  &::before {
    content: "";
    display: inline-block;
    width: 300px;
    height: 50px;
    margin: 0 auto;
    transform: skew(30deg, 0deg);
    border-radius: 15px 0px 0px 10px;
    position: absolute;
    top: 0;
    left: 10%;
    ${ScreenBackground}
  }
  &::after {
    content: "";
    display: inline-block;
    width: 300px;
    height: 50px;
    margin: 0 auto;
    transform: skew(-30deg, 0deg);
    border-radius: 0px 15px 10px 0px;
    position: absolute;
    top: 0;
    right: 10%;
    ${ScreenBackground}
  }
`;
const ScreenShadowStyled = styled(ScreenStyled)`
  transform: rotateX(180deg);
  bottom: -20px;
  filter: blur(27px);
  position: absolute;
`;
const SeatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
`;
const SeatStyled = styled.div`
  display: inline-block;
  width: 28px;
  height: 20px;
  border-radius: 7px;
  background-color: #e0e2e1;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  margin: 0px 5px;
  &::before {
    content: "${(props) => props.name}";
    font-size: 12px;
    color: #e0e2e1;
    position: absolute;
    left: 50%;
    font-weight: bold;
    transform: translateX(-50%);
    top: 0;
  }
  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 4px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #e0e2e1;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    bottom: -6px;
    transition: 0.5s;
  }
  &:hover {
    background-color: #f14231;
    &::after {
      background-color: #f14231;
    }
    &::before {
      color: white;
    }
  }
  &.daChon {
    background-color: #f14231;
    &::after {
      background-color: #f14231;
    }
    &::before {
      color: white;
    }
  }
  &.daDat {
    background-color: #76c3ea;
    &::after {
      background-color: #76c3ea;
    }
    &::before {
      color: white;
    }
  }
`;

export default function FilmListSeat() {
  let { mangGhe, mangGheChon } = useSelector(
    (rootReducer) => rootReducer.DatVePhimReducer
  );
  let dispatch = useDispatch();
  const renderListSeat = () => { 
    return mangGhe.map((item, index) => {
      return (
        <SeatWrapper key={index}>
          <p style={{ fontWeight: "bold", opacity: "0.3" }}>{item.hang}</p>
          <div className="d-flex">
            {item.danhSachGhe.map((ghe, index1) => {
              return (
                <SeatStyled
                  key={index1}
                  name={ghe.soGhe}
                  className={`${ghe.daDat ? "daDat" : ""} ${
                    mangGheChon.findIndex(
                      (item) => item.soGhe === ghe.soGhe
                    ) !== -1
                      ? "daChon"
                      : ""
                  }`}
                  onClick={() => {
                    dispatch({
                      type: CHON_GHE,
                      gheChon: ghe,
                    });
                  }}
                />
              );
            })}
          </div>
          <p style={{ fontWeight: "bold", opacity: "0.3" }}>{item.hang}</p>
        </SeatWrapper>
      );
    });
  };
  return (
    <Wrapper>
      <ScreenStyled>
        <ScreenShadowStyled />
      </ScreenStyled>
      {renderListSeat()}
    </Wrapper>
  );
}
