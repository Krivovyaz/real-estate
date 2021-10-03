import React from 'react'
import styled from 'styled-components'
import './stylesForAdditionalComponents/AdditionalInformation.css'
import { Link } from 'react-router-dom'

function AdditionalInformation() {
    return (
        <Container>
            <div className="main-part">
                <div className="additional-header">
                    <h3>Find out more information about our offers</h3>
                </div>
                <div className="description">
                    <p>With Estate Together Group you can earn money in many ways. You can buy a property 
                       that pays you a high rent every month, or you can choose a property that will give you a large 
                       capital growth. But you can also build a real estate portfolio that will give you both rent and
                       capital gains. A large number of individual investors have earned millions of dollars in distributions
                       and diversified their portfolio with commercial real estate.</p>
                </div>
                <Link className="sign-up" to="/Authorisation">
                    <StartInvestBtn>Sign Up</StartInvestBtn>
                </Link>
            </div>
        </Container>
    )
}

export default AdditionalInformation

const Container = styled.div`
background-color: #054163;
min-height: 400px;
margin-top: 120px;
`

const StartInvestBtn = styled.div`
background-color: #00aae1;
padding: 21px 113px;
outline: none;
border-radius: 5px;
max-width: 302px;
margin-top: 15px;
: hover{
    background-color: #35c4f2;
    transition-duration: 0.3s;
}

@media (max-width: 375px) {
    padding: 21px 80px;
    backgroun-color: white;
}

`
