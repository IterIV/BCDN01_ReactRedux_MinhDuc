import React, { Component } from "react";
import { connect } from "react-redux";
import { END_GAME, RANDOM_ITEM } from "../../redux/Types/OanTuTiTypes";
import Player from "./Player";
import Computer from "./Computer";
import { StyledButtonStart, StyledResultIMG } from "../../pages/OanTuTi/StyledComponents";

class SelectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangTuTi: [],
      computer: {},
    };
  }

  handleClickButtonStart = () => {
    this.props.dispatch({
      type: RANDOM_ITEM,
    });
  };
  render() {
    return (
      <>
        <Player/>
        <Computer/>
        <StyledResultIMG>{this.props.ketQua}</StyledResultIMG>
        <StyledButtonStart
          onClick={() => {
            let count = 0;
            let loopAction = setInterval(() => {
              this.handleClickButtonStart();
              count++;
              if (count > 10) {
                clearInterval(loopAction);
                this.props.dispatch({
                  type: END_GAME,
                });
              }
            }, 100);
          }}
        >
          Bắt đầu
        </StyledButtonStart>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.OanTuTiReducer.ketQua,
  };
};
export default connect(mapStateToProps)(SelectedList);
