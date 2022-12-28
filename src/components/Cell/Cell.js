import React from 'react'
import { CellContent } from './Cell.css'

const Cell = (props) => {
  return (
    <CellContent number={props.number}>{props.children}</CellContent>
  )
}

export default Cell