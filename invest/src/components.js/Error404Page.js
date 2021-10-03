import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import './stylesForMainPages/Error404page.css'
import mainPhoto from '../photo/404.svg'


function Error404Page({setShowFooter}) {
    setShowFooter(false);
    return (
        <Container>
            <div className="page-404">
                <div className="text-404">
                    <h1>Oops... We can't find this page!</h1>
                    <p>The link you followed may be broken, or the page may have been removed</p>
                </div>
                <img src={mainPhoto}></img>
                <Link className="sign-up" to="/">
                    <StartInvestBtn>Back to main page</StartInvestBtn>
                </Link>
            </div>
        </Container>
    )
}

export default Error404Page

const Container = styled.div` 
    background-color: #F2F6FF;
    img{
        width: 60%;
        margin: 0 auto;
    }
`

const StartInvestBtn = styled.div`
    font-size: 20px;
    text-decoration: none;
    background: #00AAE1;
    color: #fff;
    border-radius: 5px;
    display: inline-block;
    padding: 20px 50px;
    font-weight: 600;
    transition: 0.2s all;
    margin: 30px 0 ;
: hover{
    background-color: #35c4f2;
    transition-duration: 0.3s;
}
`