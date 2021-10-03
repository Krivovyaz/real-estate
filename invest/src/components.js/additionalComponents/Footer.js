import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../photo/logo.svg'
import skypeImg from '../../photo/skype.svg'
import telegramImg from '../../photo/telegram.svg'
import viberImg from '../../photo/viber.png'
import whatsappImg from '../../photo/whatsapp.svg'
import './stylesForAdditionalComponents/Footer.css';


function Footer({showFooter}) {

    const socialMedias = [
        {
            img: skypeImg,
            path: "/Authorisation"
        },
        {
            img: telegramImg,
            path: "/Authorisation"
        },
        {
            img: viberImg,
            path: "/Authorisation"
        },
        {
            img: whatsappImg,
            path: "/Authorisation"
        }    
    ];

    const navInformation = [
        {
            title: "SERVICES",
            information: [
                {
                    title: "Timeshare investment",
                    path: "/TimeShare"
                },
                {
                    title: "Investment in finished real estate",
                    path: "/FinishedRealEstate"
                },
                {
                    title: "Investent in real estate under construction",
                    path: "/RealEstate"
                },
                
            ]
        },
        {
            title: "CONTACTS",
            information: [
                {
                    title: "Phone numbers:",
                    path: "-"
                },
                {
                    title: "+1234567890",
                    path: "/"
                },
                {
                    title: "+1234567890",
                    path: "/"
                },
                {
                    title: "E-mail adress",
                    path: "-"
                },
                {
                    title: "Estate:together@group.com",
                    path: "-"
                }
                
            ]
        },
        {
            title: "LEGAL INFO",
            information: [
                {
                    title: "User Terms",
                    path: "/404"
                },
                {
                    title: "Privacy Policy",
                    path: "/404"
                },
                {
                    title: "General Loan Terms",
                    path: "/404"
                },
                {
                    title: "Cookie Policy",
                    path: "/404"
                },
                {
                    title: "Investment Risk Station",
                    path: "/404"
                },
                
            ]
        }
    ]


    return (
        <Container>
            <div className="left-part-footer">
                <Link to="/" className="footer-logo">
                    <img src={logo}></img>
                </Link>
                <div className="social-medias">
                    {
                        socialMedias.map((item) => {
                            return(
                                <Link className="social-linck" to={item.path}>
                                    <img src={item.img}></img>
                                </Link>
                            )
                        })
                    }
                </div>
                <p className="footer-social-text">Estate Together, 2020, All rights are reserved.</p>
            </div>
            <div className="right-part-footer">
                {
                    navInformation.map((item) => {
                        return(
                            <div className="footer-item">
                                <ul>
                                    <li><h5>{item.title}</h5></li>
                                    {
                                        item.information.map((link) => {
                                            if(link.path === "-"){
                                                return(
                                                    <li>
                                                        <h6>{link.title}</h6>
                                                    </li>
                                                )
                                            } else {
                                                return(
                                                    <li>
                                                        <Link to={link.path}>{link.title}</Link>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default Footer

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: #054163;
padding: 0 5% 30px 5%;
`