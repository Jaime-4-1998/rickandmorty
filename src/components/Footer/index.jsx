import React from 'react'
import { BsFacebook,BsLinkedin,BsTwitter } from 'react-icons/bs';
import {FooterContainer,FooterDiv,FooterImg,FooterTitle,FooterRef,Icon} from './FooterElemets'
const Footer = ({ImgGan}) => {
  return (
    <>
    <FooterContainer>
        <FooterDiv>
            <FooterImg loading="lazy" src={ImgGan} alt='Jaime Ivan Ramirez Osorio eljimmyramz' title='Jaime Ivan Ramirez Osorio eljimmyramz' width="50" height="50"/>
        </FooterDiv>
        <FooterDiv>
            <FooterTitle>
                Build by El Jimmy Ramz
            </FooterTitle>
            <FooterRef href="https://eljimmyramz.com/">About of Jimmy</FooterRef>
            <FooterRef href="https://eljimmyramz.com/Experiencie">Expirience of Jimmy</FooterRef>
            <FooterRef href="https://github.com/Jaime-4-1998">GitHub of Jimmy</FooterRef>
        </FooterDiv>
        <FooterDiv>
            <FooterTitle>
                Social Media
            </FooterTitle>
            <FooterRef href="https://www.facebook.com/eljimmyramz"><Icon><BsFacebook/></Icon></FooterRef>
            <FooterRef href="https://www.linkedin.com/in/eljimmyramz/"><Icon><BsLinkedin/></Icon></FooterRef>
            <FooterRef href="https://twitter.com/eljimmyramz"><Icon><BsTwitter/></Icon></FooterRef>
        </FooterDiv>
    </FooterContainer>
    </>
  )
}

export default Footer