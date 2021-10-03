import React from 'react'
import styled from 'styled-components'
import './stylesForAdditionalComponents/HowDoesItWork.css'
import numberImg1 from '../../photo/Group 22.svg'
import numberImg2 from '../../photo/Group 24.svg'
import numberImg3 from '../../photo/Group 26.svg'

function HowDoesItWork() {

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
        </Container>
    )
}

export default HowDoesItWork

const Container = styled.div`
`