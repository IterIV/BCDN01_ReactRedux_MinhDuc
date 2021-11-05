import React, { Component } from "react";
import { connect } from "react-redux";
import { StyledKeoBuaBao } from "../../pages/OanTuTi/StyledComponents";
import { CHON_KEO_BUA_BAO } from "../../redux/Types/OanTuTiTypes";

class KeoBuaBaoItem extends Component {
  render() {
    return (
      <StyledKeoBuaBao
        side={this.props.side}
        top={this.props.top}
        className={this.props.active}
        onClick={() => {
          if (this.props.side === "left") {
            this.props.dispatch({
              type: CHON_KEO_BUA_BAO,
              maChon: this.props.ma,
            });
          }
        }}
      >
        <img src={this.props.hinhAnh} alt="" className="w-100" />
      </StyledKeoBuaBao>
    );
  }
}
export default connect()(KeoBuaBaoItem);
