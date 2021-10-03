import React from 'react'
import styled from 'styled-components';
import advantages1 from '../../photo/advantages-1.svg';
import advantages2 from '../../photo/advantages-2.svg';
import advantages3 from '../../photo/advantages-3.svg';
import './stylesForAdditionalComponents/Advantages.css';


function Advantages() {

    const info = [
        {
            img: advantages1,
            title: "Wide choice for investment",
            text: "Estate Together Group allows you to invest in real estate all over the world. You can browse all the property loans on our website and get full reference information before choosing the ones you like."
        },
        {
            img: advantages2,
            title: "Profitable terms",
            text: "We offer our clients the most favorable conditions for investment. Thanks to the widest selection of real estate for investment, you can choose the most profitable and suitable option for your goals."
        },
        {
            img: advantages3,
            title: "Safe and secure",
            text: "By investing with Estate Together Group, you are in complete control of the investment process. All the most necessary information on your object will be updated in your personal account."
        }
    ]

    return (
        <Container>
            <div className="header">
                <h3>Our advantages</h3>
            </div>
            <div className="main">
                {
                    info.map((item) => {
                        return (
                                <div className="element">
                                    <div className="element-photo">
                                        <img src={item.img}></img>
                                    </div>
                                    <div className="elementTitle">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="elementText">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                        );
                    })
                }
            </div>
        </Container>
    )
}

export default Advantages

const Container = styled.div`
    margin: 120px auto;
    max-width: 1380px;
    text-align: center;

    @media (max-width: 768px){
    margin: 60px auto;
    }
`