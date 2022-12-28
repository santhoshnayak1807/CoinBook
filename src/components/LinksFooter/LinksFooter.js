import React from 'react'
import { 
    ContentWrapper, 
    Icon, 
    Wrapper 
} from './LinksFooter.css'
import GithubSvg from 'assets/icons/github.svg'
import LinkedInSvg from 'assets/icons/linkedin.svg'

const LinksFooter = () => {
  return (
    <Wrapper>
        <ContentWrapper>
            <a href="https://github.com/santhoshnayak1807/Coinbook" target="_blank" rel="noreferrer"><Icon src={GithubSvg} /></a>
            <a href="https://www.linkedin.com/in/pathlavath-santhosh-02a13b244/" target="_blank" rel="noreferrer"><Icon src={LinkedInSvg} /></a>
        </ContentWrapper>
    </Wrapper>
  )
}

export default LinksFooter