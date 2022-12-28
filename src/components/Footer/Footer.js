import React from 'react'
import { HomeIcon, MenuItem, MenuWrapper, Overview, Portfolio, StyledLink, Title, Wrapper } from './Footer.css'

const Footer = () => {
  return (
    <Wrapper>
        <MenuWrapper>
            <StyledLink to="/" >
                <MenuItem>
                  <HomeIcon size="1.4rem" />
                  <Title>Coins</Title>
                </MenuItem>
            </StyledLink>
            <StyledLink to="/portfolio" >
                <MenuItem>
                <Portfolio size="1.4rem"/>
                  <Title>Portfolio</Title>
                </MenuItem>
            </StyledLink>
            <StyledLink to="/" >
                <MenuItem>
                <Overview size="1.4rem" />
                  <Title>Overview</Title>
                </MenuItem>
            </StyledLink>
        </MenuWrapper>
    </Wrapper>
  )
}

export default Footer