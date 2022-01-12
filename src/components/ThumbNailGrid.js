import React, { useState } from "react";

//Styles
import styled from 'styled-components'

//Components
import LibraryProcess from './LibraryProcess'

//Framer Motion
import { motion } from 'framer-motion'

const ThumbNailGrid = ({processs, setProcesss, currentProcess, setcurrentProcess}) => {

  
  

  return (
 
    <ThumbNailSection>
        {processs.map((process) => (
          <LibraryProcess processs={processs} setProcesss={setProcesss}  currentProcess={currentProcess} setcurrentProcess={setcurrentProcess} title={process.title} description={process.description} active={process.active} id={process.id}
          />
        ))}
    </ThumbNailSection>
    
  );
};

export default ThumbNailGrid;

const ThumbNailSection =  styled(motion.div)`

    height: 100%;
    display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1080px) {

    grid-template-columns: 1fr 1fr;

}

@media screen and (max-width: 765px) {

display: none;

}



`


