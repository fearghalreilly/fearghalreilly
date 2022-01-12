import React from 'react'
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { titleAnim, fade, fade2, pageAnimation } from './animation'


//Styles
import styled from 'styled-components'

const Hero = () => {


    const [isOn, setIsOn] = useState(false);
  
    
  
    useEffect(() => {
  
      const toggleSwitch = () =>  setIsOn(!isOn)
    
      setTimeout(toggleSwitch, 1200);
  
  
    }, [isOn])

    
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 15
};



    return (
        <>
        <HeroSection  exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show" >
         
            <Content >
            <motion.div >
                <HeroHeading variants={titleAnim}>Beautifully Crafted Web Experiences</HeroHeading>
                <Meet variants={titleAnim}>
                <span >👇</span>
                    <p >Meet Fearghal</p>
                    
                </Meet>
                <motion.div variants={titleAnim}>
                <Swtich  switchToggle={!isOn}>
                  <Handle layout transition={spring} />
                </Swtich>
                </motion.div>
                </motion.div>
            </Content>
            
            <ContentHero  variants={fade2} >
            <svg  xmlns="http://www.w3.org/2000/svg" class="hero-design" width="686" height="688" viewBox="0 0 686 688">
            <g id="blockdesign" transform="translate(-935 -289)">
              <rect  class="square-anim" data-name="Rectangle 2" width="172" height="172" rx="19" transform="translate(1277 289)" fill="#6e00ff"/>
              <rect class="square-anim" data-name="Rectangle 10" width="172" height="172" rx="86" transform="translate(1277 461)" fill="#ff64cb"/>
              <rect class="square-anim" data-name="Rectangle 8" width="172" height="172" rx="19" transform="translate(1449 461)" fill="#e5d5fa"/>
              <rect class="square-anim" data-name="Rectangle 5" width="172" height="172" rx="19" transform="translate(1277 633)" fill="#6e00ff"/>
              <rect class="square-anim" data-name="Rectangle 3" width="172" height="172" rx="19" transform="translate(1107 461)" fill="#fff"/>
              <rect class="square-anim" data-name="Rectangle 9" width="172" height="172" rx="86" transform="translate(1107 633)" fill="#00f7ff"/>
              <rect class="square-anim" data-name="Rectangle 7" width="172" height="172" rx="19" transform="translate(935 633)" fill="#fff" opacity="0.17"/>
              <rect class="square-anim" data-name="Rectangle 4" width="172" height="172" rx="19" transform="translate(1107 805)" fill="#fff"/>
            </g>
          </svg>
          </ContentHero>
        </HeroSection>
        </>
    )
}

const HeroSection = styled(motion.div)`


    display: grid;
    grid-template-columns: 66% auto;
    background: unset;
    padding: 0;
    width:100%;
   
   

@media screen and (max-width: 1080px) {
background: #6E00FF;
color: white;
display: flex;
text-align: center;
justify-content:center;
height: unset;


}

`

const Content = styled(motion.div)`
 background: #6E00FF;
 padding: 6em 8em 6em 4em;
 text-align: left;
 z-index: 1;

 @media screen and (max-width: 1080px) {

  padding: 100px 85px;
 text-align: center;

}

@media screen and (max-width: 450px) {

padding: 100px 15px;
text-align: center;

}

`

const HeroHeading = styled(motion.h1)`
 font-size: 80px;
line-height: 1.2em;
margin: 32px 0px;
color: white;

@media screen and (max-width: 1080px) {

  font-size: 49px;

}
`

const Meet = styled(motion.div)`

  display: flex;    
  width: 200px;
  font-weight: bold;
  color: #FF64CB;
  font-size: 24px;

  @media screen and (max-width: 1080px) {

    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
 


span {
   
  padding-right: 10px;

}

p {

  

}

@media screen and (max-width: 1080px) {

}

@media screen and (max-width: 1080px) {


}

`

const ContentHero = styled(motion.div)`


display: unset;
    margin-left: -50%;
    margin-top: 15%;
    width: 100%;
    z-index: 2;


@media screen and (max-width: 1080px) {

  display: none;

}

`

const Swtich = styled(motion.div) `

width: 50px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  margin-top:32px;
  


  ${({ switchToggle }) => switchToggle && `
    justify-content: flex-end;
  `}

@media screen and (max-width: 1080px) {


margin: 32px auto;


}


`

const Handle = styled(motion.div)`

width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 40px;

  @media screen and (max-width: 1080px) {

   

}

`




export default Hero;