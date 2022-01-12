import React from 'react'

import {Helmet} from 'react-helmet'

//Page Components
import About from '../components/About'
import Mission from '../components/Mission'
import Process from '../components/Process'
import Library from '../components/Library'


//animation
import {
  pageAnimation} from '../animation'
import { motion } from 'framer-motion'



//styled
import styled from "styled-components";

const HomePage = () => {

  
    return (
       <>
     
    
        <Details 
        exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show">
            <About/>
            <Mission/>
            <Process/>
            <Library/>
         </Details>
         </>
       
    )
}



export default HomePage;

const Details = styled(motion.div)`

  overflow-x: hidden;
   overflow-y: hidden;
`
