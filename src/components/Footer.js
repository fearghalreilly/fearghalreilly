import React from 'react'

//styled
import styled from "styled-components";

import {Link} from "react-router-dom";


//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebookF,
  faGithub,
  faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";


const Header = ({setToggle, toggle}) => {
    return(
        <>
        <Footer >
                    <FooterSection>
                <HeadingText>INTERESTED TO WORK WITH ME?</HeadingText>
                <Button onClick={() => setToggle(!toggle)}>LET'S TALK!</Button>
                <SocialMediaContainer>

                <a href="https://github.com/fearghalreilly" target="_blank" rel="noopener noreferrer">
                <SocialMediaIconContainer> 
                <FontAwesomeIcon size="1x" color='white'  icon={faGithub} />
                </SocialMediaIconContainer>
                </a>

                <a href="https://www.facebook.com/fearghal.reilly" target="_blank" rel="noopener noreferrer">
                <SocialMediaIconContainer> 
                <FontAwesomeIcon size="1x" color='white'  icon={faFacebookF} />
                  </SocialMediaIconContainer>
                  </a>

                  <a href="http://ie.linkedin.com/in/fearghalreilly" target="_blank" rel="noopener noreferrer">
                  <SocialMediaIconContainer> 
                  <FontAwesomeIcon size="1x" color='white'  icon={faLinkedin} />
                  </SocialMediaIconContainer>
                  </a>

                </SocialMediaContainer>
               <Watermark>Copyright © 2021 Fearghal Reilly</Watermark>
                 
               

                        
                        
                    
                   
                    
                    
                  </FooterSection>
               
              </Footer>
              </>
        

    )

}

const Footer = styled.div`

padding: 6em 4em 6em 4em;
background-color: #6E00FF;
   

 @media screen and (max-width: 1080px) {



    padding: 4em 2em;



}



`

 

const FooterSection = styled.div`

 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 

`


const HeadingText = styled.h2`

font-size: 32px;
letter-spacing: 1.5;
line-height: 1.1;
font-weight: 600;
padding:0;
color: white;
text-align: center;
padding-bottom: 40px;

@media screen and (max-width: 765px) {

font-size: 28px;

}



`
const Button = styled.button`

    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    padding: 1rem 2rem;
    font-weight: bold;
    border: 3px solid ;
    background: white;
    color: white;
    transition: all 0.5s ease;
    border-radius: 50px;
    border-color: #FF64CB;
    background-color: #FF64CB;
    color: white;
    outline: none;
 
    &:hover{
        background-color: #00F7FF;
        border: 3px solid #00F7FF;
        color: white;
    }

    @media screen and (max-width: 765px) {

font-size: 20px;

}


@media screen and (max-width: 414px) {


padding:0px 0px 20px 0px;
padding: .8rem .8rem;
 
}
`

const SocialMediaContainer = styled.div`
 
  display:flex;



`

const SocialMediaIconContainer = styled.div `
    background-color: #6700EE;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin:40px 5px;


`
const Watermark = styled.p `
  color: white;
  font-size: 0.5rem;
  font-weight: 100;
  text-align: center;


 
  
`


export default Header;






