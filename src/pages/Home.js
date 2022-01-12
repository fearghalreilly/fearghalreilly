import React from 'react'

import {Helmet} from 'react-helmet'

//Page Components
import Hero from '../components/Hero'
import FeaturedProject from '../components/FeaturedProject'
import Services from '../components/Services'
import OtherProject from '../components/OtherProject'

//animation
import {pageAnimation} from '../components/animation'
import { motion } from 'framer-motion'

//styled
import styled from "styled-components";

const HomePage = () => {
    return (
<>
        <Helmet>
        <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>Fearghal Reilly | Home</title>
    <meta name="description" content="I am a feelance web developer called Fearghal based in Ireland who designs, developes and maintains clean modern mobile responsive websites. Why not reach out to me for a free consultation." />
    
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  
        </Helmet>
       

        <Details>
            <Hero/>
            <FeaturedProject />
            <Services />
            <OtherProject />
         </Details>
       </>
    )
}



export default HomePage;

const Details = styled(motion.div)`

  overflow-x: hidden;
   overflow-y: hidden;
`
