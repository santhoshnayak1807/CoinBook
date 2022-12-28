import { Notepad } from '@styled-icons/boxicons-solid/Notepad'
import { FileBarGraph } from "@styled-icons/bootstrap/FileBarGraph"
import { GridAlt } from '@styled-icons/boxicons-solid/GridAlt'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeIcon = styled(GridAlt)`
  
`
export const Overview = styled(FileBarGraph)`
`
export const Portfolio = styled(Notepad)``

export const Wrapper = styled.div`
  position: fixed;
  background: ${props => props.theme.tertiary};
  bottom: 0;
  left: 0;
  width: 100%;
  height: 62px;
  z-index: 100;
  display: grid;
  align-content: center;
  /* display: flex;
  align-items: center;
  justify-content: center; */

  @media (min-width: 768px) {
    display: none;
  }

`
export const MenuWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
  /* display: flex;
  width: 100%;
  justify-content: space-evenly; */
`
export const MenuItem = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  /* width: 120px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px; */
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainFont};
`
export const Title = styled.h3`
  color: ${props => props.theme.mainFont};
  margin-top: 2px;
  font-size: 11px;
  font-weight: 400;
`