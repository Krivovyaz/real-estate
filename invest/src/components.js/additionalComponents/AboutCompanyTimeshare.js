import React from 'react'
import styled from 'styled-components'
import './stylesForAdditionalComponents/AboutCompanyTimeshare.css'
import mainPhotoAbout from '../../photo/whatIsTimeShare.svg'
import numberImg1 from '../../photo/Group 22.svg'
import numberImg2 from '../../photo/Group 24.svg'
import numberImg3 from '../../photo/Group 26.svg'
import tick from '../../photo/tick 4.svg'

function AboutCompanyTimeshare() {

    const instructions = [
        {
            img: numberImg1,
            title: "Create your account",
            description: "Once you create profile, view more detailed information about investment to explore the opportunities that fit your goals."
        },
        {
            img: numberImg2,
            title: "Speak with an expert",
            description: "Talk with our expert team to choose the right strategy or to answer any questions you may have."
        },
        {
            img: numberImg3,
            title: "Get started Trading",
            description: "When you’re ready to invest, you can quickly complete your transaction online.Take your investing to a new level!"
        },
    ]

    return (
        <Container>
            <div className="header-about">
                <h3>What is Timeshare?</h3>
            </div>
            <div className="main-about">
                <div className="information">
                    <h4>What is timeshare for?</h4>
                    <p>A timeshare is a shared ownership model of vacation properties in which multiple buyers use their own
                         assignments, typically in increments of one week, in the same property.
                    </p>
                    <ul>
                        <li>
                            <img src={tick}></img>
                            <p>Timeshare is a model of joint ownership of vacation real estate, in which several owners have the exclusive right to use it for a certain period of time.</p>
                        </li>
                        <li>
                            <img src={tick}></img>
                            <p>Timeshares are available for types of vacation properties such as resorts, condominiums, and apartments.</p>
                        </li>
                        <li>
                            <img src={tick}></img>
                            <p>Timeshare is available for a fixed week–the buyer has a set week each year, or a floating week–the use of the property is limited by the season.</p>
                        </li>
                        <li>
                            <img src={tick}></img>
                            <p>The advantages of a timeshare include staying at a professionally managed resort in a predictable environment.</p>
                        </li>
                    </ul>
                </div>
                <div className="photo-share">
                    <img src={mainPhotoAbout}></img>
                </div>
            </div>
            <div className="instructions-about">
                <div className="title-share">
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
            </div>
        </Container>
    )
}

export default AboutCompanyTimeshare

const Container = styled.div`
    margin-bottom: 120px;
    padding: 0 20px;
`