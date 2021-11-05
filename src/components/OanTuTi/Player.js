import React, { Component } from "react";
import { connect } from "react-redux";
import avtPlayer from "../../assets/img/ironMan_avt.png";
import {
  StyledWrapper,
  StyledAvatarGroup,
  StyledSelectedLargeIMG,
} from "../../pages/OanTuTi/StyledComponents";
import KeoBuaBaoItem from "./KeoBuaBaoItem";
class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
    };
  }
  renderSelectedIMG = (side) => {
    let { mangTuTi, player } = this.props;
    let index = mangTuTi.findIndex(item=>item.ma === player.ma);
    return <StyledSelectedLargeIMG src={mangTuTi[index].hinhAnh} side={side} />;
  };

  renderListItem = (side) => {
    let { mangTuTi, player } = this.props;
    return mangTuTi.map((element, index) => {
      return (
        <KeoBuaBaoItem
          key={index}
          side={side}
          top={50 + index * 100}
          active={element.ma === player.ma ? "active" : ""}
          hinhAnh={element.hinhAnh}
          ma={element.ma}
        />
      );
    });
  };

  static getDerivedStateFromProps(newProps, currentState) {
    return {...newProps.player};
  }
  shouldComponentUpdate(newProps,newState){
    if(newProps.player.ma !== this.state.player.ma){
      return true;
    }
    return false;
  }

  render() {
    return (
      <>
        <StyledWrapper size={360} side="left">
          {this.renderListItem("left")}
          <StyledAvatarGroup side="left">
            <img src={avtPlayer} alt="" />
            <p>Player</p>
          </StyledAvatarGroup>
        </StyledWrapper>
        {this.renderSelectedIMG("left")}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangTuTi: state.OanTuTiReducer.mangTuTi,
    player: state.OanTuTiReducer.player,
  };
};
export default connect(mapStateToProps)(Player);
