import { Link } from "react-router-dom";
import styled from "styled-components";
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'
import { DarkTheme } from '@styled-icons/fluentui-system-regular/DarkTheme'
import { Menu } from '@styled-icons/evaicons-solid/Menu'
import{ SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'

export const NavbarWrap = styled.div`
  width:100%;
  background: ${props => props.theme.secondary};
`
export const Nav = styled.div`
  width: 90%;
  margin: auto;
  padding-block: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavLeft = styled.div`
  
`
export const NavRight = styled.div`
  display: flex;
  align-items: center;
`
export const NavLeftUl = styled.ul`
  list-style: none;
  padding: 0;
`
export const NavLeftLi = styled.li`
  display: inline-block;
  width: 120px;
  text-align: center;
  background: ${props => props.currentLocation ?  props.theme.tertiary : '' };
  padding-block: 10px;
  border-radius: 12px;
  font-weight: 400;
`
// export const Link = ({ isActive, children, ...props}) => {
//   return (
//       <RRDLink {...props}>
//           {children}
//       </RRDLink>
//   )
// }

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainFont};
`
export const InputContainer = styled.div`
  position: relative;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background: ${props => props.theme.tertiary};
  margin-left: 16px;
  border-radius: 10px;
  padding: 12px 8px;

  @media (max-width:767px) {
    padding: 12px;
    margin-left: 6px;
  }
`
export const SearchSymbol = styled(SearchOutline)`
  position: absolute;
  margin-top: 9px;
  margin-left: 10px;

  @media (min-width:768px) {
    margin-left: 24px;
    margin-top: 13px;
  }
`

export const CurrencySymbol = styled.div`
  width: 28px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background: #191b1f;
  color: #00ff5f;
  border-radius: 50%;
  margin-right: 8px;
`
export const SelectWrap = styled.div`
  display: flex;
  position: relative;
`
export const Select = styled.select`
  appearance: none;
  background: ${props => props.theme.tertiary};
  width:60px;
  border: none;
  color: ${props => props.theme.mainFont};
  font-size: 1.1rem;
  font-weight: 500;
  &:focus {
    outline: none;
  }

  @media (max-width:767px) {
    width: 40px;
    font-size: 0.8rem;
  }
`
export const SelectArrow = styled(DownArrow)`
  position: absolute;
  margin-top: 7px;
  margin-left: 44px;
  color: #00ff5f;

  @media (max-width:767px) {
    margin-top: 2px;
    margin-left: 33px;
  }
`
export const ThemeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.tertiary};
  margin-left: 16px;
  padding: 10px 12px;
  border-radius: 12px;

  @media (max-width: 767px) {
    padding: 5px;
  }
`
export const Theme = styled(DarkTheme)`
  
`

export const MobileMenu = styled.div`
  position: relative;
`
export const MobileMenuIcon = styled(Menu)`
`
export const DisplayMenu = styled.div`
  position: absolute;
  background: ${props => props.theme.tertiary};
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  right: 0;
  margin-top: 10px;
  z-index: 1000;
`
export const MobileMenuItem = styled.div`
  padding-block: 2px;
  font-size: 0.9rem;
  text-align: right;
`
export const MobileMenuLink = styled(Link)`
  text-decoration: none;
  color:${props => props.theme.mainFont};
  font-weight: 400;
`
export const Hr = styled.hr`
  margin-top: 4px;
`