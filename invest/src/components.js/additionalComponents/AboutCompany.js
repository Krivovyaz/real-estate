import React from 'react'
import styled from 'styled-components'
import './stylesForAdditionalComponents/AboutCompany.css'
import mainPhotoAbout from '../../photo/about-main.jpg'
import HowDoesItWork from './HowDoesItWork'

function AboutCompany() {

    // const instructions = [
    //     {
    //         img: numberImg1,
    //         title: "Create your account",
    //         description: "Once you create profile, view more detailed information about investment to explore the opportunities that fit your goals."
    //     },
    //     {
    //         img: numberImg2,
    //         title: "Speak with an expert",
    //         description: "Talk with our expert team to choose the right strategy or to answer any questions you may have."
    //     },
    //     {
    //         img: numberImg3,
    //         title: "Get started Trading",
    //         description: "When you’re ready to invest, you can quickly complete your transaction online.Take your investing to a new level!"
    //     },
    // ]

    return (
        <Container>
            <div className="header-about">
                <h3>About our company</h3>
            </div>
            <div className="main-about">
                <div className="information">
                    <h4>Estate Together</h4>
                    <p>Estate Together Group allows you to diversify your investment across chosen properties
                       so that you can make your mind up about where and when to invest. We have created a
                       platform that allows investors to choose from residential and commercial properties
                       across Europe and beyond. We hire experts in our field, from our real estate team 
                       to our technology team.
                    </p>
                    <p>Estate Together Group is a real estate investment platform that provides investors with
                       direct access to individual commercial real estate investment opportunities, allowing
                       you to view, compare and personally select transactions that meet your investment
                       criteria. Our experienced managers will make it easier for you to invest and get
                       higher returns.
                    </p>
                </div>
                <div className="photo">
                    <img src={mainPhotoAbout}></img>
                </div>
            </div>
            {/* <div className="instructions-about">
                <div className="title">
                    <h3>How does It work?</h3>
                </div>
                <div className="instructions">
                    {
                        instructions.map((item) => {
                            return(
                                <div className="instruction">
                                    <div className="instruction-img">
                                        <img src={item.img}></img>
                                    </div>
                                    <div className="instruction-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}
            <HowDoesItWork/>
        </Container>
    )
}

export default AboutCompany

const Container = styled.div`
    margin-bottom: 120px;
    padding:0 20px;
`