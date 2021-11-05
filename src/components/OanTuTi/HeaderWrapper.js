import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

class HeaderWrapper extends Component {
  render() {
    const HeaderWrapper = styled.div`
      background: #f78812;
      border-radius: 10px 10px 0px 0px;
      width: 100%;
      text-align: center;
    `;
    const HeaderItem = styled.div`x
          padding: 5px;
          display: inline-block;
          margin: 10px;
          `;
    const HeaderItemCaption = styled.p`
      display: inline-block;
      background-color: #51050f;
      margin-bottom: 0;
      padding: 10px 15px 10px 15px;
      font-weight: bold;
      border-radius: 10px 0px 0px 10px;
      color: white;
    `;
    const HeaderItemText = styled.p`
      display: inline-block;
      background: white;
      margin-bottom: 0;
      padding: 10px 15px 10px 15px;
      font-weight: bold;
      border-radius: 0px 10px 10px 0px;
      color: #51050f;
    `;
    return (
      <HeaderWrapper>
        <HeaderItem>
          <HeaderItemCaption>Tổng số lần chơi</HeaderItemCaption>
          <HeaderItemText>{this.props.soLanChoi} lần</HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemCaption>Tổng số lần thắng</HeaderItemCaption>
          <HeaderItemText>{this.props.soLanThang} lần</HeaderItemText>
        </HeaderItem>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soLanChoi: state.OanTuTiReducer.soLanChoi,
    soLanThang: state.OanTuTiReducer.soLanThang,
  };
};
export default connect(mapStateToProps)(HeaderWrapper);
