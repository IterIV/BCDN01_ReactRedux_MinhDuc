import styled from "styled-components";

export const StyledWrapper = styled.div`
      width: ${(props) => `${props.size / 2}px`};
      height: ${(props) => `${props.size}px`};
      background-color: ${(props) =>
        props.side === "left" ? "white" : " #F78812"};
      position: absolute;
      z-index: 2;
      top: 22%;
      ${(props) => (props.side === "left" ? "left:0" : " right:0")};
      box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px,
        rgb(0 0 0 / 6%) 0px 0px 0px 1px;
      ${(props) => {
        const borderRadiusSide = props.side === "left" ? "right" : "left";

        return `
      border-top-${borderRadiusSide}-radius: 350px;
      border-bottom-${borderRadiusSide}-radius: 350px;`;
      }}
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    `;
export const StyledAvatarGroup = styled.div`
    width: 80px;
    position: absolute;
    text-align: center;
    font-weight: bold;
    ${(props) => props.side}: 55px;
    top: 50%;
    transform: translateY(-50%);
    & img {
      width: 100%;
    }
  `;

export const StyledKeoBuaBao = styled.div`
      width: 70px;
      height: 70px;
      padding: 10px;
      background-color: ${(props) =>
        props.side === "left" ? "white" : "#51050F"};
      border-radius: 50%;
      position: absolute;
      transition: 0.5s;
      top: ${(props) => `${props.top}px`};

      ${(props) => props.side}: -35px;

      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      &::before {
        content: "";
        border: ${(props) =>
          props.side === "left" ? "6px solid #51050F" : "5px solid white"};
        width: 80px;
        height: 80px;
        position: absolute;
        top: -5px;
        left: -5px;
        border-radius: 50%;
        transition: 0.5s;
      }
      &::after {
        content: "";
        border: ${(props) =>
          props.side === "left" ? "3px solid #51050F" : "3px solid white"};
        width: 65px;
        height: 65px;
        position: absolute;
        top: 2.5px;
        left: 2.5px;
        border-radius: 50%;
        transition: 0.5s;
      }
      ${(props) =>
        props.side === "right"
          ? `
          &.active{
              background-color: #F78812;
              box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
          }`
          : `
        &:hover, &.active{
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
            cursor: pointer;
        }`}
      &:hover,
      &.active {
        &::before,
        &::after {
          ${(props) =>
            props.side === "left"
              ? `
              border-color: #F78812;
            `
              : `
              `}
        }

      }
    `;
export const StyledSelectedLargeIMG = styled.img`
transform: rotate(${(props) => (props.side === "left" ? "" : "-")}81deg);
position: absolute;
${(props) => props.side}: 160px;
z-index: 1;
top: 179px;
width: 180px;
`
export const StyledResultIMG = styled.div`
position: absolute;
width: 150px;
height: 150px;
border-radius: 50%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
text-align: center;
line-height: 150px;
font-size: 40px;
font-weight: bold;
color: #51050f;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
  rgba(0, 0, 0, 0.22) 0px 10px 10px;
&::before {
  content: "";
  position: absolute;
  border: 5px solid #c56824;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  top: 0;
  left: 0;
}
`;
export const StyledButtonStart = styled.span`
position: absolute;
padding: 10px 20px;
border-radius: 10px;
top: 80%;
left: 50%;
transform: translateX(-50%);
background-color: #f78812;
text-align: center;
font-size: 20px;
font-weight: bold;
color: white;
transition: 0.5s;
cursor: pointer;
&:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
`;