import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/project1.png";
import theracer from "../img/project2.png";
import goodtimes from "../img/project3.png";
import giphyfinder from "../img/project4.png";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  fade2,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

//Helmet
import {Helmet} from 'react-helmet'

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();

  return (
    <>
   

    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <WorkContainer>

      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Giphy Finder Application</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/giphyfinder">
        <Hide>
        <motion.img variants={photoAnim} src={giphyfinder} alt="Giphy Finder Application" />
        </Hide>
        </Link>
      </Movie>

      <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
        <h2>Cryptocurrency API Application</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/cryptocurrencyapi">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="Cryptocurrency API Application" />
          </Hide>
        </Link>
      </Movie>
     
      <Movie ref={element3} variants={fade} animate={controls3} initial="hidden">
        <h2>JD Digital Media</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/jddigitalmedia">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="JD Digital Media" />
          </Hide>
        </Link>
      </Movie>

      <Movie ref={element4} variants={fade} animate={controls4} initial="hidden">
        <h2>ULTRA</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/ultra">
        <Hide>
        <motion.img variants={photoAnim} src={theracer} alt="Ultra" />
        </Hide>
        </Link>
      </Movie>

      
      
      <ScrollTop />
      </WorkContainer>
    </Work>

    </>
  );
};

const Work = styled(motion.div)`
    overflow-y: hidden;
`

const WorkContainer = styled(motion.div)`
    padding: 3em 4em 6em 4em;
    display: grid;
grid-template-columns: 1fr 1fr;
gap: 30px;
    
    
    @media screen and (max-width: 1080px) {
      grid-template-columns: 1fr;

     
}
@media screen and (max-width: 765px) {

padding: 45px 35px 45px 35px;

}

`

const Movie = styled(motion.div)`
  padding-bottom: 50px;

  .line {
    height: 0.5rem;
    background:  #6E00FF;
    margin-bottom: 15px;
    
  }
  img {
    max-height:80%;
    width: 100%;
    object-fit: contain;
  
   
    
  
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;