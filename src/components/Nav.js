import React, { useState } from 'react'

//Link
import {Link} from "react-router-dom";

//Location
import {useLocation} from 'react-router-dom'

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faGithub
  } from "@fortawesome/free-brands-svg-icons";

  //Motion
  import { motion } from 'framer-motion';

//Styles
import styled from 'styled-components'

const Nav = ({toggle, setToggle}) => {

    const [click, setClick] = useState(false)

    //HandleClick
    const handleClick = () => setClick(!click)

    //Location
    const {pathname } = useLocation();
    return (
        <NavbarContainer>
          
            <HeroSection>
              <IconLink  to='/'>Fearghal Reilly</IconLink>
            
                <NavbarMenu  style={{ right: click ? '0' : '100%' }} onClick={handleClick}    >
                    <NavbarItem><NavLink to="/work">My Work</NavLink>
                    <Line
                    transition={{duration: 0.75}}
                    initial={{width: '-2%'}}
                    animate={{width: pathname.includes('/work') ? '100%' : '0%'}}
                    />
                    </NavbarItem>
                    <NavbarItem><NavLink to="/about">About Me</NavLink>
                    <Line
                    transition={{duration: 0.75}}
                    initial={{width: '-2%'}}
                    animate={{width: pathname === '/about' ? '100%' : '0%'}}
                    />
                   
                    </NavbarItem>
                    <NavbarItem><NavLink onClick={() => setToggle(!toggle)}>Hire Me</NavLink>
                    </NavbarItem>
                </NavbarMenu>
             <BurgerIcon onClick={handleClick}>
        {click ? <FontAwesomeIcon icon={faTimes} color="#fff" size="2x" /> : <FontAwesomeIcon icon={faBars} color="#fff" size="2x" />}
        </BurgerIcon>
        
        
            </HeroSection>
            <SocialSection>
                <SocialMenu>
                <a href="https://github.com/fearghalreilly" target="_blank" rel="noopener noreferrer">
                    <SocialItem><FontAwesomeIcon icon={faGithub} size='1' /></SocialItem>
                </a>

                <a href="https://www.facebook.com/fearghal.reilly" target="_blank" rel="noopener noreferrer">
                    <SocialItem><FontAwesomeIcon icon={faFacebookF} size='1' /> </SocialItem>
                </a>

                <a href="http://ie.linkedin.com/in/fearghalreilly" target="_blank" rel="noopener noreferrer">
                    <SocialItem><FontAwesomeIcon icon={faLinkedin} size='1' color="#551A8B"/></SocialItem>
                </a>

                </SocialMenu>
                </SocialSection>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
 background: #6700EE;
 display: grid;
 grid-template-columns: 66% auto;
 position: sticky;
  top: 0;
  z-index:10;
  width: 100%;

 
 

@media screen and (max-width: 1080px) {
    display: unset;
    
  }

`

const HeroSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: #6700EE;
padding: 45px 25px 45px 100px;
position: sticky;
  top: 0;
  z-index:10;
@media screen and (max-width: 1080px) {
  padding: 45px 55px 45px 55px;
  }

  @media screen and (max-width: 765px) {

    padding: 45px 35px 45px 35px;
  }

`

const NavbarMenu = styled.ul`
display:flex;
flex-direction:row;

@media screen and (max-width: 765px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin-top: 10px;
    top: 0;
    position: absolute;
    opacity: 1;
    transition: all 0.5s ease;
   background: #6700EE;
    z-index: 1;
    
   

  }

`

const IconLink = styled(Link)`
color: #00F7FF;
font-weight: bold;
font-size: 24px;

`

const NavbarItem = styled.li`
margin: 0 20px;
position: relative;

@media screen and (max-width: 765px) {
  margin: 20px 0px;
 
  }

`

const NavLink = styled(Link)`
color: white;
font-size: 22px;

@media screen and (max-width: 1080px) {
  font-size: 24px;
 
  }

  @media screen and (max-width: 765px) {

 
  }

 


`

const SocialSection = styled.div`

background: white;
display: flex;
justify-content: start;
align-items: center;
    

@media screen and (max-width: 1080px){
    display: none;
 
  }
`

const SocialMenu = styled.ul`
display:flex;
flex-direction:row;

`
const SocialItem = styled.li`
padding: 0 30px;

@media screen and (max-width: 1080px){
    display: none;
 
  }

`

const BurgerIcon = styled.div`
 display: none;
  @media screen and (max-width: 765px) {
    display: block;
    position: relative;
    top: -15px;
    right: -15px;
    transform: translate(-100%, 60%);
    font-size: 16px;
    cursor: pointer;
    z-index: 2;
   
  }

  `

const Line = styled(motion.div)`
height: 4px;
background: #00F7FF;
width: 0%;
position: absolute;
top: 50px;

@media screen and (max-width: 960px) {
top: 30px;
}

`

export default Nav;