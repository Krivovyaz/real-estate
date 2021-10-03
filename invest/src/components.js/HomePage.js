import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mainPhoto from '../photo/Background-main.jpg'
import Advantages from './additionalComponents/Advantages';
import Offers from './additionalComponents/Offers';
import AdditionalInformation from './additionalComponents/AdditionalInformation';
import AboutCompany from './additionalComponents/AboutCompany';

function HomePage({setShowFooter, projects}) {

    setShowFooter(true);

    const projectsTitle = "Latest Loans",
    amountOfProjects = 6;

    return (
        <Container>
            <BackgroundPhoto>
                <img src={mainPhoto}></img>
            </BackgroundPhoto>
            <FirstSeenInformation>
                <Information>
                    <h1>Best choice of Real Estate Investment</h1>
                    <p>We are driven to make real estate investing accessible and simple for you. Diversify your portfolio by investing online in commercial real estate. You can find out about all new investment offers when registering on our website</p>
                    <Link className="start-investment" to="/Authorisation">
                        <StartInvestBtn>Start investing</StartInvestBtn>
                    </Link>
                </Information>
            </FirstSeenInformation>
            <Advantages />
            <Offers projectsTitle={projectsTitle} amountOfProjects={amountOfProjects}/>
            <AdditionalInformation/>
            <AboutCompany/>
        </Container>
    )
}

export default HomePage

const Container = styled.div`
`

const FirstSeenInformation = styled.div`
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    
`

const BackgroundPhoto = styled.div`
width: 100%;

img{
    position: absolute;
    top:0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -100;
    object-fit: cover;
    background-size: cover;
  }
`
const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 20px 0 20px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    max-width: 700px;
    color: #fff;

    a{
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
    
    }

    h1{
        font-size: 48px;
        font-weight: 700;
        line-height: 65px;
    }
    

    p{
        font-size: 20px;
        font-weight: 300;
        margin: 20px 0;
    }

    @media (max-width: 500px){
        h1{
            margin-top: -250px;
            font-size: 36px;
            line-height: 42px;
            font-weight: 700;
        }
    }
`
const StartInvestBtn = styled.div`
    background-color: #00aae1;
    padding: 21px 76px;
    outline: none;
    border-radius: 5px;
    max-width: 302px;
    margin-top: 15px;
    @media (max-width: 500px){
        padding: 21px 56px;
    }
    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;

    }


`