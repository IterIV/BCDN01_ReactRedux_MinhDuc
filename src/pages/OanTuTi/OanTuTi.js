import React, { Component } from "react";
import styled from "styled-components";
import HeaderWrapper from "../../components/OanTuTi/HeaderWrapper";
import SelectedList from "../../components/OanTuTi/SelectedList";
export default class OanTuTi extends Component {
  render() {
    const GameWrapper = styled.div`
    background: #51050F;
    border-radius: 10px;
    height: 500px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    position: relative;
  `;
    return (
      <div>
        <h1 className="text-center my-4">Game Oẳn Tù Tì</h1>
        <div className="container mt-2">
          <GameWrapper>
           <HeaderWrapper/>
           <SelectedList/>
          </GameWrapper>
          
        </div>
      </div>
    );
  }
}
