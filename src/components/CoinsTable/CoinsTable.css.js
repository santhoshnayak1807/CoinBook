import styled from "styled-components"
import { SelectArrows } from '@styled-icons/entypo/SelectArrows'
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'
import { ArrowLeftS } from '@styled-icons/remix-fill/ArrowLeftS'
import { ArrowRightS } from '@styled-icons/remix-fill/ArrowRightS'
import { SortDown, SortUp } from '@styled-icons/bootstrap'

export const ApiSettings = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  padding-inline: 14px;
  font-size: 14px;
  font-weight: 500;

  @media (max-width:1219px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
`
export const ApiSettingsLeft = styled.div`

`
export const ApiSettingsRight = styled.div`

`
export const CategoryContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
`
export const CategoryItem = styled.div`
  background: ${props => props.selected ? props.theme.lineChart : props.theme.tertiary};
  padding: 2px 6px;
  font-size: 0.6rem;
  margin-inline: 4px;
  margin-block:2px;
  border-radius: 6px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-block: 0;
  }
`

export const SelectArrow = styled(SelectArrows)`
  width: 12px;
  margin-bottom: 3x;
  cursor: pointer;
`

export const TopBottom = styled.span`
  margin-right: 10px;
  font-size: 28px;
  font-weight: 700;
`

export const Order = styled.div`
  display: inline;

  @media (max-width: 499px) {
    display: none;
  }
`
  
export const DownArrow = styled(ArrowDropDown)`
  width: 24px;
  margin-bottom: 2px;
  cursor: pointer;
`
export const ShowInput = styled.select`
  background: ${props => props.theme.secondary};
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
  margin-left: 1px;
  margin-right: 8px;
  width: fit-content;
  border: none;

`
export const LeftArrow = styled(ArrowLeftS)`
  width:20px;
  margin-bottom: 2px;
  cursor: pointer;
`
export const RightArrow = styled(ArrowRightS)`
  width:20px;
  margin-bottom: 2px;
  cursor: pointer;
`
export const FilterUp = styled(SortUp)`
  width: 15px;
  margin-left: 3px;
`

export const FilterDown = styled(SortDown)`
  width: 15px;
  margin-left: 3px;
`

export const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    background: ${(props) => props.theme.secondary};
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.tertiary};
    border-radius: 120px;
    height: 4px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`

export const TableWrapper = styled.table`
  position: relative;
  width: 100%;
  display: block;
  padding: 0px 12px ;
`
export const TableHeaderRow = styled.thead`
  > th {
    text-align: left;
    font-size: 12px;
    padding-block: 14px;
    padding-inline: 12px;
    font-weight: 500;
  }
`
export const Wrapper = styled.tbody`
  text-align: left;
  border-width: 1px;
  border-color: ${props => props.theme.hrLinetop};
  border-style: solid;
  > tr {
  }
`

export const TableContent = styled.td`
  font-size: 12px;
  font-weight: 400;
  padding-block: 10px;
  padding-inline: 12px;
`