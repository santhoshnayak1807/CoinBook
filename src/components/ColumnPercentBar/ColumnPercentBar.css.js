import styled from "styled-components";


export const TopItemsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
`
export const TopItem = styled.div`
  margin-top: 2px;
  color:${props => props.color};
`
export const BulletPoint = styled.span`
  margin-right: 6px;
`
export const PercentDisplay = styled.div`
  width: 130px;
  margin-bottom: 16px;
  height: 8px;
  overflow: hidden;
  background: linear-gradient(
    ${props =>
      `to right,
       ${props.color1} 0%,
       ${props.color1} ${props.percent - 1}%,
       ${props.color2} ${props.percent - 1}%,
       ${props.color2} 100%
      `
    }
  );
  border-radius: 7px;
`

export const PercentDisplayCircle = styled.div`
  background: ${props => props.color1};
  height: 8px;
  width: 8px;
  margin-left: calc(${props => props.percent}% - 7px);
  border-radius: 7px;
`