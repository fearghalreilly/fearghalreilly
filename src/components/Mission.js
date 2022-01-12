import React from 'react'

//Styles
import styled from 'styled-components'

//Images


//Link
import {Link} from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import { scrollRevealt,} from "../animation";
import { useScroll } from "./useScroll";


const Mission = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
   
    
    return (

        <>
        <Featured >
            <Left ref={element} variants={scrollRevealt} animate={controls} initial="hidden">
                <SubHeading>My Mission</SubHeading>
                <Heading>What I strive for</Heading>
                <Describtion>Your website should turn visitors into engaged customers. It’s like having a top-performing sales rep working 24 hours a day, 7 days a week.</Describtion>

            </Left>
            <Right ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden">
        <ImgContainer>
        <Link to="/work/good-times">
       
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
    background-color: #FF64CB;
    

  

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





export default Mission