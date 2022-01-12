import React from 'react'
import ReactPlayer from 'react-player'

//Styles
import styled from "styled-components";

//Animations
import { motion } from "framer-motion";
import {
  scrollReveal,
} from "../animation";
import { useScroll } from "./useScroll";
import ScrollTop from "./ScrollTop";



const  ResponsivePlayer =  ({url}) =>  {

    //USeScroll
    const [element, controls] = useScroll();
  
 
      return (
        <PlayerWrapper  ref={element} variants={scrollReveal} animate={controls} initial="hidden" >
            <Heading>Video Preview</Heading>
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            controls={true}
          />
        </PlayerWrapper>
        
      )
    
  }

 
  const PlayerWrapper = styled(motion.div)`
   margin: auto;
   width: 80%;
   overflow-x: hidden;
   overflow-y: hidden;
   

   @media screen and (max-width: 1080px) {


width: 100%;

}
@media screen and (max-width: 765px) {

width: 100%;

}
    
    
    .react-player {
   

    }

  `

const Heading = styled.h2`
text-align: center;
font-size: 32px;
padding-bottom: 20px;


@media screen and (max-width: 1080px) {




}
@media screen and (max-width: 765px) {
    font-size: 28px;
}
`

  export default ResponsivePlayer;