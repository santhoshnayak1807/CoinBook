import styled from "styled-components";


export const NavUnderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavUnderWrap = styled.div`
  max-width: 90%;
  background: ${props => props.theme.secondary};
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`
export const NavUnderUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`
export const NavUnderLi = styled.li`
  margin-inline: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
`
export const NavBulletPoint = styled.div`
  margin-right: 8px;
  font-size: 24px;
`
export const PercentDisplay = styled.div`
  position: relative;
  overflow: hidden;
  width: 58px;
  height: 12px;
  background: linear-gradient(
    to right,
    ${props => props.theme.secondaryInverted} 0%,
    ${props => props.theme.secondaryInverted} ${props => props.percent - 10}%,
    #2175e5 ${props => props.percent - 10}%,
    #2175e5 100%
  );
  border-radius: 7px;
  margin-left: 10px;
`
export const Circle = styled.div`
  background: ${props => props.theme.secondaryInverted};
  width: 14px;
  height: 12px;
  border-radius: 7px;
  margin-left: calc(${props => props.percent}% - 12px);

`

export const NavUnderImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => props.marginRight}px;
  >img {
    width: 70%;
  }
`