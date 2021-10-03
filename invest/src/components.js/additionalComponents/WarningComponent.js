import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import warningSign from '../../photo/warningSign.png'

function WarningComponent({setShowVerificationWindow}) {
    return (
        <Container>
            <Window>
                 <i class="fas fa-times" onClick={() => {setShowVerificationWindow(false)}}></i>
                 <Info>
                    <WarningSign>
                        <img src={warningSign}></img>
                    </WarningSign>
                    <h3>Sorry, something is wrong...</h3>
                    <p>We noticed that this mailbox address is already registered</p>
                    <TextElement>
                        <p>Please, </p>
                        <Link className="signUpNow" to="/LogIn" >Login now</Link>
                    </TextElement>
                 </Info>
            </Window>
        </Container>
    )
}

export default WarningComponent

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Window = styled.div`
    border-radius: 10px;
    background-color: #fff;
    min-width: 700px;
    width: 35%;
`

const WarningSign = styled.div`
    // margin-top: 15px;

`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        font-weight: 700;
        line-height: 1.1;
        font-size: 2.5rem;
        margin-top: 30px;
    }

    p{
        font-family: 'Open Sans', sans-serif;
        font-size: 25px;
        line-height: 1.7;
        color: #666666;
        margin-top: 20px;
    }
`

const TextElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 20px 0;

    p{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        color: #989898;
        margin:0 5px 0 0;
    }

    a{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
    }
`