import React from 'react'

//Styles
import styled from 'styled-components'

//Images
import icon4 from '../img/project4.png'

//Video
import video1 from '../videos/video1.mp4'

//Link
import {Link} from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  scrollReveal,
  scrollRevealt,
} from "../animation";
import { useScroll } from "./useScroll";
import ScrollTop from "./ScrollTop";

const FeaturedProject = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    return (
    

        <>
       
        <Featured ref={element} variants={fade} animate={controls} initial="hidden" >
            
            <Left ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden">
                <SubHeading>Featured Project</SubHeading>
                <Heading>Giphy Finder Application</Heading>
                <Describtion>A React Application that uses the Giphy API to retrieve the Trending gifs with the ability to search, save and remove them. The application is mobile responsive and uses Context and Reducer for statement.</Describtion>

            </Left>
            <Right ref={element3} variants={scrollRevealt} animate={controls3} initial="hidden">
                <ImgContainer  >
                <Link to="/work/giphyfinder">
        <img
  src={icon4} alt="featured project Giphy Finder Application" />
 

        </Link>
        </ImgContainer>
      </Right> 
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
    

    ::before {
content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #E5D5FA;
  top: 0;
  left: 0;
  z-index: -1;
    }

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





export default FeaturedProject