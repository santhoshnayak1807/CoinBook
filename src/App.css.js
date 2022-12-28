import styled from "styled-components";


export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  background: ${props => props.theme.primary};
  border: 10px solid ${props => props.theme.secondary};
`