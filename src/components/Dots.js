import React from 'react'

//Components
import Dot from './Dot'

//Styles
import styled from "styled-components";

const Dots = ({processs, setProcesss, currentProcess, setcurrentProcess }) => {


    





    return(
        <>
        <DotsContainer>
            {processs.map((process) => (
                <Dot setcurrentProcess={setcurrentProcess} process={process} processs={processs} id={process.id} key={process.id} setProcesss={setProcesss} />
            ))}
        </DotsContainer>
        </>
    )
}

const DotsContainer = styled.div `

   display: none;


@media screen and (max-width: 765px) {

    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  
}

    
    
   


`


export default Dots