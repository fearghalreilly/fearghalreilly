import React, {useEffect, useCallback} from 'react'
import styled from "styled-components";

//Componenents
import FormSignup from './FormSignUp'

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  } from "@fortawesome/free-solid-svg-icons";
 


  //Animations
import { motion } from "framer-motion";
import {
  contactAnim,
} from "../animation";

import { useScroll } from "./useScroll";

const ContactUs = ({toggle, setToggle}) => {

  const [element, controls] = useScroll();

  const keyPress = useCallback(
    (e) => {
        if (e.key ==='Escape' && !toggle) {
          setToggle(true)
        }
    },
    [setToggle, toggle],
);

useEffect(
  () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
  },
  [keyPress]
);

    return(
    <>
    <Backdrop toggle={!toggle}>
    <Test ref={element} variants={contactAnim} animate={controls} initial="hidden">
    <Form>
    <Info>
    <FontAwesomeIcon onClick={() => setToggle(!toggle)} icon={faTimes} color='#757c98' size='1x'/>
    </Info>
    <FormSignup  setToggle={ setToggle} />
    
    </Form>
    </Test>
    </Backdrop>
    </>
    )
}

const Backdrop = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 11;
  
  ${props => props.toggle && `
  display: none;
  `}
  z-index: 998;

`
const Test = styled(motion.div)`


  display:flex;
  align-items: center;
  justify-content: center;
  height: 100%;

`

const Form = styled.div`


  width: 700px;
  
  position: relative;
  background-color: white;
  border-radius: 5%;
  z-index: 999;
  padding-top:20px;
  padding-bottom:20px;

`

const Info = styled.div`

   position: absolute;
   top: 0;
   right: 0;
   cursor: pointer;
   padding-top:10px;
   padding-right: 10px;
`



export default ContactUs



