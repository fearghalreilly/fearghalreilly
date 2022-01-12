import React, { useState } from "react";

//Styles
import styled from 'styled-components'

//Data
import {ProcessState} from '../processState'

//Components
import ActiveThumbNailWindow from './ActiveThumbNailWindow'
import ThumbNailGrid from './ThumbNailGrid'
import Dots from './Dots'

//Animations
import { motion } from "framer-motion";
import {
    scrollRevealt,
  } from "../animation";
  import { useScroll } from "./useScroll";


const Library = () => {
    const [processs, setProcesss] = useState(ProcessState);
    const [currentProcess, setcurrentProcess] = useState(processs[0])

    const [element, controls] = useScroll();




  return (
 
      <LibraryWrapper  ref={element} variants={scrollRevealt} animate={controls} initial="hidden">


          

        {processs.map((process) => {
            return(
                <ActiveThumbNailWindow currentProcess={currentProcess} active={process.active} id={process.id} />


            )
        
})}
       



       <ThumbNailGrid  processs={processs} setProcesss={setProcesss}  currentProcess={currentProcess} setcurrentProcess={setcurrentProcess} />
       
       <Dots setcurrentProcess={setcurrentProcess} processs={processs} setProcesss={setProcesss}/>
      </LibraryWrapper>
    
  );
};

export default Library;

const LibraryWrapper =  styled(motion.div)`
   
    padding: 0em 4em 6em 4em;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;

    
    

  

    @media screen and (max-width: 1080px) {


        grid-template-columns: 1fr;
        padding: 0em 2em 4em 2em;
        grid-gap: 0px;


}
@media screen and (max-width: 765px) {

padding: 0px 35px 45px 35px;



}


`
