import React from 'react'



//Styles
import styled from "styled-components";

const Dot = ({process, processs, setcurrentProcess, id, setProcesss}) => {

const songSelectHandler = () => {
    setcurrentProcess(process);

  //add active state
  const newSongs = processs.map((song) => {
    if (song.id === id){
      return{
        ...song,
        active: true,
      }
    } else {
      return {
        ...song,
        active: false,
      }
    }
    
  })

  setProcesss(newSongs)
}


    return(
        <>
        <DotContainer onClick={songSelectHandler} primary={process.active} />
        </>
    )
}

const DotContainer = styled.div `
  padding: 5px;
  margin-right: 5px;
  cursor:pointer;
  border-radius:50%;
  background: ${(props) => (props.primary ? '#FF64CB' : ' #6E00FF')};
 
`


export default Dot