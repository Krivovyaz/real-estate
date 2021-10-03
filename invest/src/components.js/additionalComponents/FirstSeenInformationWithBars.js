import React, {useState} from 'react'
import styled from 'styled-components'
import './stylesForAdditionalComponents/FirstSeenInformationWithBars.css'


function FirstSeenInformationWithBars({params, changeParams, titleForFirstSeenInfo, descriptionForFirstSeenInfo}) {
    return (
        <Container>
            <Information>
                <Text>
                    <h1>{titleForFirstSeenInfo}</h1>
                    <p>{descriptionForFirstSeenInfo}</p>
                </Text>
                    <div className="slide-container">
                        <div className="slide">
                            <div className="slide-info">
                                    <h3>LOAN AMOUNT</h3>
                                    <h3 className="output">${params.output1}</h3>
                            </div>
                            <div className="slide-triggered-info">
                                <input type="range"  min="50" max="50000" value={params.output1}  className="slider" onChange={e=> changeParams("output1", e.target.value)}></input>
                                <div className="bar-info">
                                    <span>$50</span>
                                    <span>$50000</span>
                                </div>
                            </div>
                        </div>

                        <div className="slide">
                            <div className="slide-info">
                                    <h3>DURATION</h3>
                                    <h3 className="output" >{params.output2} month</h3>                            
                            </div>
                            <div className="slide-triggered-info">
                                <input type="range"  min="6" max="24"  value={params.output2} className="slider" onChange={e=> changeParams("output2", e.target.value)}></input>
                                <div className="bar-info">
                                    <span>6 month</span>
                                    <span>24 month</span>
                                </div>
                            </div>
                        </div>

                        <div className="slide">
                            <div className="slide-info">
                                    <h3>YR ESTIMATED ROI</h3>
                                    <h3 className="output">{params.output3}%</h3>
                            </div>
                            <div className="slide-triggered-info">
                                <input type="range"   min="7" max="13"  value={params.output3} className="slider" onChange={e=> changeParams("output3", e.target.value)}></input>
                                <div className="bar-info">
                                    <span>7%</span>
                                    <span>13%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Information>
        </Container>
    )
}

export default FirstSeenInformationWithBars

const Container = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
`

const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    // max-width: 700px;
    margin: 80px auto;
    color: #fff;

    @media (max-width: 800px){
        margin: 50px auto 0 auto;
    }


    h1{
        text-align: center;
        color: #fff;
        font-size: 48px;
        font-weight: 700;
        line-height: 65px;
        padding-bottom: 10px;
    }

    p{
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        padding-bottom: 55px;
        max-width: 811px;
        margin: 0 auto;
    }
`

const Text  = styled.div`
    padding: 0 20px;
    @media (max-width: 800px){
       h1 {
        font-size: 36px;
        line-height: 42px;
       }
    }
    @media (max-width: 600px){
        height: calc(100vh - 190px);
        margin: 80px 0 40px 0;
    }
`