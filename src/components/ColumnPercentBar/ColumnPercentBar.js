import React from 'react'
import { 
  BulletPoint, 
  PercentDisplay, 
  PercentDisplayCircle, 
  TopItem, 
  TopItemsWrap, 
} from './ColumnPercentBar.css'

const ColumnPercentBar = (props) => {
  return (
    <>
      <TopItemsWrap>
        <TopItem color={props.color1}>
          <BulletPoint>&#8226;</BulletPoint>
          {props.first}
        </TopItem>
        <TopItem color={props.color2}>
          <BulletPoint>&#8226;</BulletPoint>
          {props.second}
        </TopItem>
      </TopItemsWrap>
      <PercentDisplay
        color1={props.color1}
        color2={props.color2}
        percent={props.percent}
      >
        <PercentDisplayCircle 
          color1={props.color1}
          percent={props.percent}
        />
      </PercentDisplay>
    </>
  )
}

export default ColumnPercentBar