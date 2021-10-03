import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { activate } from '../../http/UserAPI'
import { Link } from 'react-router-dom'
import verificationSign from '../../photo/verificationSign.svg'
import { Context } from '../../index'
import { useHistory } from 'react-router-dom';

function ActivationForm({setShowActivationForm}) {

    const {user} = useContext(Context);
    const history = useHistory();
    const [activationCode, setActivationCode] = useState();

    const activateUser = async () => {
        try{
            await activate(activationCode);
            user.setIsAuth(true);
            history.push('/');
        } catch (e) {
            console.log('work - error');
            if(e.response.data.message === 'not correct code'){
                alert(e.response.data.message);
            }
        }
    } 

    return (
        <Container>
            <Window>
                 <i class="fas fa-times" onClick={() => {setShowActivationForm(false)}}></i>
                 <Info>
                    <h3>Verify your account</h3>
                    <Icon>
                        <img src={verificationSign}></img>
                    </Icon>
                    <p>Please, enter activation code</p>
                    <EmailInput>
                        <input type="text" placeholder="enter activation code" onChange={e => setActivationCode(e.target.value)}></input>
                    </EmailInput>
                    <SubmitBtn onClick={ () => {activateUser()}}>Submit</SubmitBtn>
                 </Info>
            </Window>
        </Container>
    )
}

export default ActivationForm

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
    padding: 30px 40px 50px 40px;

    @media (max-width: 1000px) {
        width: 80%;
        min-width: 300px;
    }

    @media (max-width: 450px) {
        width: 70%;
        min-width: 250px;
    }
`
const Icon = styled.div`
    margin: 25px 0 20px 0;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
        font-weight: 700;
        line-height: 1.1;
        font-size: 2.5rem;
        margin-top: 30px;
    }

    p{
        font-family: 'Open Sans', sans-serif;
        font-size: 25px;
        line-height: 1.4;
        color: #666666;
    }

`

const EmailInput = styled.div`
    width: 400px;
    height: 40px;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    margin-top: 20px;

    input {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        font-family: 'Open Sans', sans-serif;
        font-size: 15px;
        color: #555555;
        line-height: 1.2;
        padding: 0 0 0 26px ;
    }

    @media (max-width: 450px) {
        width: 300px;
    }
`

const SubmitBtn = styled.div`
    width: 400px;
    height: 50px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: #fff;
    line-height: 25px;
    font-weight: 700;
    letter-spacing: 1px;
    background: #00AAE1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border-radius: 10px;
    cursor: pointer;

    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }
    @media (max-width: 450px) {
        width: 300px;
    }
`