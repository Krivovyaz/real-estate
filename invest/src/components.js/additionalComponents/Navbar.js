import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DropMenuRealEstatement from './DropMenuRealEstatement';
import './stylesForAdditionalComponents/Navbar.css';
import Burger from './Burger'

function Navbar() {

    const [open, setOpen] = useState(false);


    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false); 
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        // if(window.innerWidth < 960) {
        //     setDropdown(true);
        // } else {
        //     setDropdown(true);
        // }
        setDropdown(true);
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    return (
        <Container>
            <Burger open={open} setOpen={setOpen}/>
            <NavbarMenu open={open} setOpen={setOpen}> 
                <ul className={click ? 'nav-menu active': 'nav-menu'} > 
                    <li className="nav-item"> 
                        <Link to='/TimeShare' className="nav-links" onClick={() => {setOpen(!open)}}>Timeshare investment</Link> 
                    </li> 
                    <li className = {dropdown ? "nav-item real-estate-invest-nav" : "nav-item"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                        {/* <Link to='/RealEstate' className="nav-links" 
                        >  */}
                            <p>Real estate investment</p> <i className='fas fa-caret-down'/> 
                        {/* </Link>  */}
                        {dropdown && <DropMenuRealEstatement open={open} setOpen={setOpen} />} 
                    </li> 
                    <li className="nav-item" onClick={closeMobileMenu}> 
                        <Link to='/404' className="nav-links" onClick={() => {setOpen(!open)}}>Contacts</Link> 
                    </li> 
                    <li className="nav-item"> 
                        <Link to='/FAQ' className="nav-links" onClick={closeMobileMenu} onClick={() => {setOpen(!open)}}>FAQ</Link> 
                    </li> 
                    <li className="nav-item back-to-home"> 
                        <Link to='/' className="nav-links" onClick={closeMobileMenu} onClick={() => {setOpen(!open)}}>Home</Link> 
                    </li> 
                </ul> 
            </NavbarMenu>

        </Container>
    )
}

export default Navbar

const Container = styled.div``

const NavbarMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    @media (max-width: 1224px) {
        flex-direction: column;
        background-color: black;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top: 0;
        left: 0;
        height: 100vh;
        min-width: 400px;
        width: 30%;
        margin: 0;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        justify-content: start;
        z-index: 15;
        ul {
            display: flex;
            flex-direction: column;
            margin-top: 15px;
            margin-left: -120px;
        }
    }

    @media (max-width: 468px) {
        flex-direction: column;
        background-color: black;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        margin: 0;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        justify-content: start;
        z-index: 15;
        ul {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            margin-left: -120px;
        }
    }
`