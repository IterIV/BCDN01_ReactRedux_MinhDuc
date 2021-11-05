import React, { Component } from "react";
import { connect } from "react-redux";
import avtComputer from "../../assets/img/spiderMan_avt.png";
import {
  StyledAvatarGroup,
  StyledSelectedLargeIMG,
  StyledWrapper,
} from "../../pages/OanTuTi/StyledComponents";
import KeoBuaBaoItem from "./KeoBuaBaoItem";

class Computer extends Component {
  renderSelectedIMG = (side) => {
    let { mangTuTi, computer } = this.props;
    let index = mangTuTi.findIndex((item) => item.ma === computer.ma);
    return <StyledSelectedLargeIMG src={mangTuTi[index].hinhAnh} side={side} />;
  };

  renderListItem = (side) => {
    let { mangTuTi, computer } = this.props;
    return mangTuTi.map((element, index) => {
      return (
        <KeoBuaBaoItem
          key={index}
          side={side}
          top={50 + index * 100}
          active={element.ma === computer.ma ? "active" : ""}
          hinhAnh={element.hinhAnh}
          ma={element.ma}
        />
      );
    });
  };

  render() {
    return (
      <>
        <StyledWrapper size={360} side="right">
          {this.renderListItem("right")}
          <StyledAvatarGroup side="right">
            <img src={avtComputer} alt="" />
            <p>Computer</p>
          </StyledAvatarGroup>
        </StyledWrapper>
        {this.renderSelectedIMG("right")}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangTuTi: state.OanTuTiReducer.mangTuTi,
    computer: state.OanTuTiReducer.computer,
  };
};
export default connect(mapStateToProps)(Computer);
