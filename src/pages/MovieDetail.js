import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  scrollReveal,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

//Helmet
import {Helmet} from 'react-helmet'


import ComponentFeature from '../components/ComponentFeatures'
import MediaPlayer from '../components/MediaPlayer'


const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    console.log(setMovies);
  }, [movies, url]);

  //USeScroll
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  
  

  return (
    <>


        

      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <DetailsContainer >
          <HeadLine ref={element} variants={fade} animate={controls} initial="hidden" >
            <h2>{movie.title}</h2>
            <motion.img  variants={photoAnim} src={movie.mainImg} alt="movie" />
          </HeadLine>
         
          
          {movie.awardstest.map((movie) => (
            <ComponentFeature ref={element} variants={scrollReveal} animate={controls} initial="hidden"  img={movie.mainImg} description={movie.description} title={movie.title} featurenumber={movie.featurenumber} video={movie.mainVideo}/>

          ))}

          <GitContainer>
           
            <Button><a href={movie.projectURL} target="_blank" rel="noopener noreferrer">Live Project</a></Button>
            <Button><a href={movie.codeURL} target="_blank" rel="noopener noreferrer">Source Code</a></Button> 
           
          </GitContainer>

                   
        
          {movie.awardstest2.map((movie) => (
            <MediaPlayer ref={element2} variants={scrollReveal} animate={controls2} initial="hidden" url={movie.featuredvideo} />

          ))}



          


          

          


          </DetailsContainer>
        </Details>
        
      )}
    </>
  );
};

const Details = styled(motion.div)`
  background-color: white;
  padding: 3em 4em 6em 4em;
  overflow-x: hidden;
   
  
@media screen and (max-width: 1080px) {


    grid-template-columns: 1fr;
    padding: 4em 2em;
    grid-gap: 0px;


}
@media screen and (max-width: 765px) {

padding: 45px 35px 45px 35px;

}
`;

const DetailsContainer = styled(motion.div)`
  
    display: flex;
    flex-direction: column;
`;

const HeadLine = styled(motion.div)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding-bottom: 2em;
 

  h2 {
    text-align: center;
    font-size: 42px;
    letter-spacing: 1px;
    font-weight: bold;
    margin-bottom:30px;

    @media screen and (max-width: 1080px) {

      font-size: 38px;



}
@media screen and (max-width: 765px) {

  font-size: 34px;

}
   
  }
  img {
    width: 80%;
    object-fit: fill;
    border-radius: 30px;

    @media screen and (max-width: 1080px) {


      width: 100%;

}
@media screen and (max-width: 765px) {

  width: 100%;
  border-radius: 20px;

}
  }
`;

const GitContainer = styled(motion.div)`
  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 2em;

    @media screen and (max-width: 1080px) {




padding-bottom: 2em;



}
@media screen and (max-width: 765px) {

    
padding-bottom: 1em;
flex-direction: column;

}
`;

const Button = styled.div`

    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    padding: 1rem 0rem;
    width: 300px;
    font-weight: bold;
    border: 3px solid ;
    background: white;
    color: white;
    transition: all 0.5s ease;
    border-radius: 50px;
    border-color: #FF64CB;
    background-color: #FF64CB;
    color: white;
    outline: none;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;

    a {
      color: white;
    }
 
    &:hover{
        background-color: #00F7FF;
        border: 3px solid #00F7FF;
        color: white;
    }

    @media screen and (max-width: 765px) {

font-size: 20px;
margin-top: .25rem;
    margin-bottom: .25rem;

}


@media screen and (max-width: 414px) {


padding:0px 0px 20px 0px;
padding: .8rem .8rem;
 
}

`



export default MovieDetail;