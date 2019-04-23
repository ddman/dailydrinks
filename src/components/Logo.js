import React from 'react'
import styled from 'styled-components'
import { Navbar, NavbarBrand, } from 'reactstrap';



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
  width:600px;
  white-space: pre;
  margin:0 auto;
  color: #737373;
`


let Logo = ({ dispatch }) => {
  return (<Outer>
    <Navbar color="light" light expand="md" className="d-block d-sm-none"  >
      <NavbarBrand href="/"   >Daily Drinks</NavbarBrand>
    </Navbar>
    <Acii className="d-none d-sm-block"  >{aciiArt}</Acii>
  </Outer>)
}


export default Logo



