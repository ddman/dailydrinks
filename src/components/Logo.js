import React from 'react'
import styled from 'styled-components'




const aciiArt = `
██████╗  █████╗ ██╗██╗  ██╗   ██╗██████╗ ██████╗ ██╗███╗   ██╗██╗  ██╗███████╗
██╔══██╗██╔══██╗██║██║  ╚██╗ ██╔╝██╔══██╗██╔══██╗██║████╗  ██║██║ ██╔╝██╔════╝
██║  ██║███████║██║██║   ╚████╔╝ ██║  ██║██████╔╝██║██╔██╗ ██║█████╔╝ ███████╗
██║  ██║██╔══██║██║██║    ╚██╔╝  ██║  ██║██╔══██╗██║██║╚██╗██║██╔═██╗ ╚════██║
██████╔╝██║  ██║██║███████╗██║   ██████╔╝██║  ██║██║██║ ╚████║██║  ██╗███████║
╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝   ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
`

const Outer = styled.div`
width:100%;
`

const Acii = styled.pre`
  font-size: 12px;
  // border:1px solid red;
  width:570px;
  white-space: pre;
  margin:0 auto;
  color: #737373;
  @media (max-width: 320px) {
    transform-origin: top left;
    transform : scale(0.6);
  }
`


let Logo = ({ dispatch }) => {
  return (<Outer><Acii>{aciiArt}</Acii></Outer>)
}


export default Logo



