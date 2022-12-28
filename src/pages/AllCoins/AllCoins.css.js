import styled from "styled-components"
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'

export const Container = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  width: 90%;
  /* margin: auto; */
`
export const H1 = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${props => props.theme.mainFont};

  @media (max-width: 399px) {
    font-size: 1rem;
  }
`
export const ChartsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 15px;
`

export const DataSelectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 15px;
  margin-inline: auto;
  padding-block: 10px;
  background: ${props => props.theme.secondary};
  padding-inline: 8px;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 500px;
    padding-block: 15px;
  }
`
export const DataSelectItem = styled.div`
  background: ${props => props.highlight ? props.theme.barChart : props.theme.tertiary};
  padding-block: 4px;
  padding-inline: 14px;
  border-radius: 20px;
  font-size: 14px;
  user-select: none;
  cursor: pointer;

  @media (max-width: 400px) {
    font-size: 10px;
    padding-inline: 8px;
  }
`
export const CoinsContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
  padding-block: 15px;
  padding-inline: 6px;
  margin-top: 25px;
  margin-bottom: 16px;
`
export const OveriewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 8px;
`

export const SelectContainer = styled.div`
  width: 95px;
  position: relative;
  /* border: 1px solid blue; */
  display: flex;
  /* justify-content: center; */
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  align-items: center;
`
export const Select = styled.select`
  appearance: none;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.mainFont};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  margin-left: 14px;

  &:focus {
    outline: none;
  }
  > option {
    background: ${props => props.theme.tertiary};
  }
`
export const StyledArrow = styled(DownArrow)`
  position: absolute;
  margin-left:72px;
  margin-top: 3px;
`