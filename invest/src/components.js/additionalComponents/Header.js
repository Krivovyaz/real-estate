import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar'
import NavAuthorisation from './NavAuthorisation'
import logo from '../../photo/logo.svg'

function Header() {

    const[click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <Container>
                <Logo>
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="logo" onClick={() => setOpen(false)}></img>
                    </Link>
                </Logo>
            <Navbar open={open} setOpen={setOpen}/>
            <NavAuthorisation/>
        </Container>
    )
}

export default Header


const Container = styled.div`
height: 90px;
background-color: #054163;
position: fixed;
z-index: 100;
width: 100%;
background-color: #054163;
top: 0;
left: 0;
@media (min-width: 1224px) {
    display: flex;
    // padding: 20px 0;
    align-items: center;
    justify-content: space-between;
    font-family: 'Open Sans', sans-serif;
}    

@media (max-width: 425px) {
    height: 60px;
} 
`

const Logo = styled.div`
    width: 112px;
    height: 63px;
    padding-left: 50px;
    @media (max-width: 1224px) {
        display:none;
    }
`
