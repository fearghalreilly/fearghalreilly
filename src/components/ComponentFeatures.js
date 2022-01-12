import React from 'react'

//Styles
import styled from 'styled-components'

//Link
import {Link} from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import {
  scrollReveal,
} from "./animation";
import { useScroll } from "./useScroll";



const ComponentFeature = ({img, description, title, setSelectedImg}) => {

    //USeScroll
  const [element, controls] = useScroll();
  

    return (

        <>
       
        <Featured  ref={element} variants={scrollReveal} animate={controls} initial="hidden" >
            
            <Left>
                <SubHeading></SubHeading>
                <Heading>{title}</Heading>
                <Describtion>{description}</Describtion>

            </Left>
            <Right>
                <ImgContainer  onClick={() => setSelectedImg(img)} >
               
        <img src={img} alt={title} />
        
        </ImgContainer>
      </Right> 
        </Featured>
        
        </>

    )
}

<Link to="/work/the-athlete"></Link>

const Featured =  styled(motion.div)`
   
    padding: 2em 0em 2em 0em;
    display: grid;
    grid-template-columns: 40% auto;
    position: relative;
    grid-gap: 40px;
    overflow-x: hidden;
   overflow-y: hidden;

    @media screen and (max-width: 1080px) {


grid-template-columns: 1fr;
padding-top: 2em;
padding-bottom: 2em;
grid-gap: 0px;


}
@media screen and (max-width: 765px) {

    padding-top: 1em;
padding-bottom: 1em;

}
    



    


`

const Left = styled(motion.div)`

@media screen and (max-width: 1080px) {
    text-align: center;

}


`
const SubHeading = styled(motion.p)`
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

const Heading = styled(motion.h2)`
font-size: 32px;


@media screen and (max-width: 765px) {

font-size: 28px;


}


`

const Describtion = styled(motion.p)`
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

const ImgContainer = styled(motion.div)`

max-height: 600px;
max-width: 1000px;


img {
    border-radius: 30px;
    @media screen and (max-width: 765px) {

border-radius: 20px;

}
}

video {
    border-radius: 10px;
    max-width: 600px;
    border-radius: 30px;
}


`





export default ComponentFeature