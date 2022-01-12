import React from "react";

//Styles
import styled from 'styled-components'


//Animations
import { motion } from "framer-motion";
import {
  fade,
} from "../animation";
import { useScroll } from "./useScroll";



const LibraryProcess = ({processs, setProcesss, currentProcess, setcurrentProcess, title, description, active, id }) => {

  //USeScroll
  const [element, controls] = useScroll();

    const songSelectHandler = () => {

      

        //add active state
        const newSongs = processs.map((process) => {
          if (process.id === id){
            return{
              ...process,
              active: true,
              
            }
          } else {
            return {
              ...process,
              active: false,
            }
          }
          
        })
      
        setProcesss(newSongs)
      
        
      }
   

  return (
 
      <Library onClick={songSelectHandler} primary={active} >
        <h2>{title}</h2>
        <p>{description}</p>
      </Library>
    
  );
};

export default LibraryProcess;

const Library =  styled(motion.div)`
position: relative;
transition: color 300ms ease-in-out;
cursor: pointer;
padding: 28px 32px;


  

&:before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -2;
background: #FF64CB;
transform: scaleX(0);
transform-origin: left;
transition: transform 300ms ease-in-out;

}

&:hover::before {
 transform: scaleX(1);

}

 ${(props) => props.primary && `
 background: #6E00FF;
 transition: background 300ms ease-in-out;


 &:before {
opacity: 0;


}
 
 
 &:hover {
    background: #6E00FF;
    
}
 
 `}


h2 { 
    color: ${(props) => (props.primary ? 'white' : 'black')};
    z-index: 2;
    margin-bottom: 24px;
    font-size: 32px;
    letter-spacing: 2px;
    width: 80%;
      
   

    @media screen and (max-width: 1080px) {

      width: 70%;
      
}
  
}
 

 

p { 
    color: ${(props) => (props.primary ? 'white' : 'black')};
    z-index: 2;
    line-height: 1.5;
font-weight: 500;
font-size: 24px;
}

`


