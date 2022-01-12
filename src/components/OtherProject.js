import React from 'react'

//Styles
import styled from 'styled-components'

//Images
import icon1 from '../img/project1.png'
import icon2 from '../img/project2.png'
import icon3 from '../img/project3.png'


//Link
import {Link} from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import { scrollRevealt} from "../animation";
import { useScroll } from "./useScroll";


const OtherProject = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    const [element4, controls4] = useScroll();
    const [element5, controls5] = useScroll();
    const [element6, controls6] = useScroll();
   
   
    
    return (

        <>
       
        <Featured >
        
        <Left ref={element} variants={scrollRevealt} animate={controls} initial="hidden">
                <SubHeading>Other Projects</SubHeading>
                <Heading>Cryptocurrency API Application</Heading>
                <Describtion>A Crypto currency application that uses an API to retreive the information with the functionality to search and filter for all coins, increased and descreased coin values.</Describtion>
            </Left>
            <Right ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden">
        <ImgContainer>
        <Link to="/work/cryptocurrencyapi">
        <img src={icon3} alt="Other Cryptocurrency API Application"/>
        </Link>
        </ImgContainer>
      </Right > 

        
        <Left ref={element3} variants={scrollRevealt} animate={controls3} initial="hidden">
                <Heading>Digital Media and Marketing Website</Heading>
                <Describtion>An Interactive Mobile Friendly Catalogue Website With Brand Identity, Animation, Landing Page, Customer Review Gallery and Question and Answer Toggle.</Describtion>
            </Left>
            <Right ref={element4} variants={scrollRevealt} animate={controls4} initial="hidden">
        <ImgContainer>
        <Link to="/work/jddigitalmedia">
        <img src={icon1} alt="Other Project JD Digital Media"/>
        </Link>
        </ImgContainer>
      </Right > 
            
            <Left ref={element5} variants={scrollRevealt} animate={controls5} initial="hidden">
                <Heading>Marketing Agency Website</Heading>
                <Describtion>An Interactive Mobile Friendly Catalogue Website With Brand Identity, Animation and Landing Page.</Describtion>
            </Left>
            <Right ref={element6} variants={scrollRevealt} animate={controls6} initial="hidden">
        <ImgContainer>
        <Link to="/work/ultra">
        <img src={icon2} alt="Other Project UlTRA"/>
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
    grid-template-columns: 40% auto;
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
text-transform: uppercase;
font-weight: bold;
color: #6E00FF;
letter-spacing: 1;
font-size: 24px;
margin: 20px 0px;

@media screen and (max-width: 765px) {
font-size: 20px;

}


`

const Heading = styled.h2`
font-size: 32px;
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
max-width: 1000px;
cursor: pointer;

img {
    border-radius: 30px;

    @media screen and (max-width: 765px) {

        border-radius: 20px;

}

}

video {
    border-radius: 10px;
    max-width: 600px;
}

`


export default OtherProject