import React from 'react'
import styled from 'styled-components'
import './stylesForAdditionalComponents/WhyShouldUInvest.css'
import finPhoto1 from '../../photo/fin-idea1.svg'
import finPhoto2 from '../../photo/fin-idea2.svg'
import finPhoto3 from '../../photo/fin-idea3.svg'

function WhyShouldUInvest() {

    const finIdeas = [
        {
            img: finPhoto1,
            title: "Tax Advantages",
            description: "Real estate investors can take advantage of numerous tax breaks and deductions that can save money during tax time."
        },
        {
            img: finPhoto2,
            title: "Higher Returns",
            description: "Real estate can improve the portfolio risk and return profile by offering a competitive risk-adjusted return."
        },
        {
            img: finPhoto3,
            title: "Cash Flow",
            description: "A key benefit of real estate investing is its ability to generate cash flow. It’s strengthen over time as you pay down your mortgage."
        }
    ]
    return (
        <Container>
            <div className="why-should-title">
                <h3>Why you should invest in finished real estate?</h3>
            </div>
            <div className="fin-ideas">
                {
                    finIdeas.map((item) => {
                        return(
                            <div className="fin-idea">
                                <div className="fin-photo">
                                    <img src={item.img}></img>
                                </div>
                                <div className="fin-text">
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

export default WhyShouldUInvest

const Container = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;
`
