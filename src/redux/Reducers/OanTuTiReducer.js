import buaIMG from "../../assets/img/bua.png";
import keoIMG from "../../assets/img/keo.png";
import baoIMG from "../../assets/img/bao.png";
import { CHON_KEO_BUA_BAO, END_GAME, RANDOM_ITEM } from "../Types/OanTuTiTypes";
const stateDefaut = {
  mangTuTi: [
    {
      ma: "bua",
      hinhAnh: buaIMG,
    },
    {
      ma: "keo",
      hinhAnh: keoIMG,
    },
    {
      ma: "bao",
      hinhAnh: baoIMG,
    },
  ],
  ketQua: "VS",
  soLanChoi: 0,
  soLanThang: 0,
  computer: { ma: "bua", hinhAnh: buaIMG },
  player:{ma:"bua",hinhAnh:buaIMG}
};
const OanTuTiReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case CHON_KEO_BUA_BAO: {
      //Reset mang
      let mangChon = [...state.mangTuTi];
      let index = mangChon.findIndex((item) => item.ma === action.maChon);
      if (index !== -1) {
        state.player = mangChon[index];
      }
      return { ...state };
    }
    case RANDOM_ITEM: {
      let randomNum = Math.floor(Math.random() * 3);
      state.computer = state.mangTuTi[randomNum];
      return { ...state };
    }
    case END_GAME: {
      //Lay ra ket qua cua Player
      let {player, computer} = state;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua";
          } else {
            state.ketQua = "Thắng";
            state.soLanThang += 1;
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.soLanThang += 1;
            state.ketQua = "Thắng";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hòa";
          } else {
            state.ketQua = "Thua";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thắng";
            state.soLanThang += 1;
          } else {
            state.ketQua = "Hòa";
          }
          break;
        default:
          break;
      }
      state.soLanChoi += 1;
      return { ...state };
    }
    default:
      return state;
  }
};

export default OanTuTiReducer;
