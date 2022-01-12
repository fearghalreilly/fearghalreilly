import React from "react";

//Styles
import styled from 'styled-components'

//Animations
import { motion } from "framer-motion";
import {fade,} from "../animation";
import { useScroll } from "./useScroll";


const ActiveThumbNailWindow = ({currentProcess, active}) => {

  const [element, controls] = useScroll();




  return (
 
      <ActiveThumbNail primary={active} >
     <motion.h2  ref={element}  variants={fade} animate={controls} initial="hidden" >{currentProcess.title}</motion.h2 >
     <motion.p  ref={element}  variants={fade} animate={controls} initial="hidden" >{currentProcess.description}</motion.p>
      </ActiveThumbNail>
    
  );
};

export default ActiveThumbNailWindow;

const ActiveThumbNail =  styled(motion.div)`


display: none;
    

@media screen and (max-width: 765px) {




background: #6E00FF;
transition: all 300ms ease-in-out;
color: white;
padding: 28px 32px 28px 32px;
max-width: 100%;   
min-height: 460px;
max-height: 460px;
position: relative;
transition: color 300ms ease-in-out;



&:before {
  background: red;
  opacity: 0;
}


${(props) => props.primary && `

background: #6E00FF;
 transition: background 300ms ease-in-out;
 display: inline-block;

 &:before {
  opacity: 0;
 }


`}


 

}

h2 {

  margin-bottom: 24px;
    font-size: 28px;
    letter-spacing: 2px;
    width: 76%;

}

p{

  line-height: 1.5;
font-weight: 500;
font-size: 20px;


}

`
