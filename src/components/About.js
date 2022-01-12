import React from 'react'

//Styles
import styled from 'styled-components'

//Images
import icon1 from '../img/abouticon1.svg'


//Link
import {Link} from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import {
  
  fade,
  scrollRevealt,
} from "../animation";
import { useScroll } from "./useScroll";
import ScrollTop from "./ScrollTop";

const About = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
   
    
    return (

        <>
       
        <Featured variants={fade} animate="show" initial="hidden" >
            
            <Left ref={element} variants={scrollRevealt} animate={controls} initial="hidden">
                <SubHeading>About Me</SubHeading>
                <Heading>I craft experiences</Heading>
                <Describtion>I  am a freelance web developer based in Ireland, working with clients around the world. As a passionate designer, I  love building products that are easy to use, accessible, engaging, and delightful.</Describtion>

            </Left>
            <Right ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden">
        <ImgContainer>
        <Link to="/work/good-times">
        <img

  src={icon1} alt="Image of Fearghal Reilly About Section" />
        </Link>
        </ImgContainer>
      </Right > 
        </Featured>
        
        </>

    )
}



const Featured =  styled(motion.div)`
   
    padding: 6em 4em 6em 4em;
    display: grid;
    grid-template-columns: 50% auto;
    position: relative;
    grid-gap: 40px;
    

  

    @media screen and (max-width: 1080px) {


        grid-template-columns: 1fr;
        padding: 4em 2em;
        grid-gap: 0px;


}
@media screen and (max-width: 765px) {

padding: 45px 35px 45px 35px;

}


`

const Left = styled(motion.div)`

@media screen and (max-width: 1080px) {
    text-align: center;

}


`
const SubHeading = styled.p`

font-weight: bold;
color: #6E00FF;
font-size: 24px;
margin: 20px 0px 10px 0px ;
letter-spacing: 2px;
@media screen and (max-width: 765px) {

    font-size: 20px;

}


`

const Heading = styled.h2`
font-size: 32px;
letter-spacing: 2px;

@media screen and (max-width: 765px) {

font-size: 28px;


}


`

const Describtion = styled.p`
font-size: 24px;
margin: 20px 0px 60px 0px;
color: #252525;
line-height: 1.5;
font-weight: 500;

@media screen and (max-width: 1080px) {
  line-height: 2;

}

@media screen and (max-width: 765px) {

font-size: 20px;
line-height: 1.5;
margin: 20px 0px 30px 0px;

}

`

const Right = styled(motion.div)`
`
const ImgContainer = styled.div`

max-height: 600px; 
max-width: 700px;


img {
    border-radius: 30px;
}

video {
    border-radius: 10px;
    max-width: 600px;
}

`





export default About