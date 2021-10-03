import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import './stylesForAdditionalComponents/ForgotPasswordWindow.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Context } from '../../index';
import {validation} from '../../services/validationService';
import { sendCodeToMailToRestorePassword } from '../../http/UserAPI';
import { checkCodeForForgotPassword } from '../../http/UserAPI';
import { restorePassword } from '../../http/UserAPI';


function ForgotPasswordWindow({showForgotWindow,setShowForgotWindow}) {

    const {user} = useContext(Context);
    const history = useHistory();

    const [whatContentShow, setWhatContentShow] = useState("EnterEmail");

    const [email, setEmail] = useState('');
    const [forgotPasswordCode, serForgotPasswordCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confNewPassword, setConfNewpassword] = useState('');

    const [showEmailError, setShowEmailError] = useState(false);
    const [showCodeError, setShowCodeError] = useState(false);
    const [showErrorNewPassword, setShowErrorNewPassword] = useState(false);
    const [showErrorConfNewpassword,setShowErrorConfNewpassword] = useState(false);

    const sendEmailToGetCode = async () => {
        const isEmail = validation.checkEmail(email);
        setShowEmailError(!isEmail);
        if(isEmail) sendEmail();
    }

    const preSendingCode = () => {
        const isEmpty = validation.isEmpty(forgotPasswordCode)
        setShowCodeError(isEmpty);
        if(!isEmpty) sendCode();
    } 

    const preSendNewPassword = () => {
        const isEqual = validation.isEqual(newPassword, confNewPassword),
              checkPas = validation.checkPassword(newPassword);

        setShowErrorConfNewpassword(!isEqual);
        setShowErrorNewPassword(!checkPas);

        if(isEqual && checkPas) restorePasswordInDb();
    }

    const sendEmail = async() => {
        try{
            const data = await sendCodeToMailToRestorePassword(email);
            setWhatContentShow('EnterCode');
            console.log(data);
        } catch(e) {
            e.response.data.message === 'Can not find user with this email' ? alert(e.response.data.message) : console.log(e.response.data)
        }
    }


    const restorePasswordInDb = async() => {
        try{
            const data = await restorePassword(email, newPassword);
            user.setUser(data);
            user.setIsAuth(true);
            history.push('/');
        } catch(e) {
            console.log(e.response.data)
            
        }
    }

    const sendCode = async() => {
        try{
            const data = await checkCodeForForgotPassword(email, forgotPasswordCode);
            setWhatContentShow('EnterNewPassword');
        } catch(e) {
            e.response.data.message === 'not correct code' ? alert(e.response.data.message): console.log(e.response.data)
        }
    }

    return (
        <Container>
             <Window>
                <i class="fas fa-times" onClick={()=> {setShowForgotWindow(!showForgotWindow)}}></i>
                {
                    whatContentShow === "EnterEmail" && <Info>
                            <h3>Forgot the password?</h3>
                            <p>Write your E-mail to reset your password</p>
                            <div className="email_input_forgot">
                                <input type="text" placeholder="Enter your Email" onChange= { (e) => setEmail(e.target.value)}></input>
                            </div>
                            <Error>
                                <span className = {showEmailError ? 'show-error' : "text-error"}>enter correct email</span>
                            </Error>
                            <SendLoginBtn onClick={()=> {sendEmailToGetCode()}}>Send</SendLoginBtn>
                            <TextElement>
                                <p>Already have an account?</p>
                                <Link className="signUpNow" to="/LogIn" onClick={()=> {setShowForgotWindow(!showForgotWindow)}}>Login now</Link>
                            </TextElement>
                            <TextElement>
                                <p>Not registered yet?</p>
                                <Link className="signUpNow" to="/SignUp">Sign up now</Link>
                            </TextElement>
                        </Info>
                }
                {
                    whatContentShow === "EnterCode" && <Info>
                            <h3>Verification code</h3>
                            <p>Enter the code that was sent to your email</p>
                            <div className="code_input_forgot">
                                <input type="text" placeholder="Enter verification code" onChange = { (e) => {serForgotPasswordCode(e.target.value)}}></input>
                            </div>
                            <Error>
                                <span className = {showCodeError ? 'show-error' : "text-error"}>enter correct email</span>
                            </Error>
                            <SendLoginBtn onClick={()=> {preSendingCode()}}>Send</SendLoginBtn>
                            <TextElement>
                                <p>Already have an account?</p>
                                <Link className="signUpNow" to="/LogIn" onClick={()=> {setShowForgotWindow(!showForgotWindow)}}>Login now</Link>
                            </TextElement>
                            <TextElement>
                                <p>Not registered yet?</p>
                                <Link className="signUpNow" to="/SignUp">Sign up now</Link>
                            </TextElement>
                        </Info>
                }
                 {
                    whatContentShow === "EnterNewPassword" && <Info>
                            <h3>New Password</h3>
                            <p>Enter the code that was sent to your email</p>
                            <div className="code_input_forgot">
                                <input type="text" placeholder="Enter new password" onChange = { (e) => {setNewPassword(e.target.value)}}></input>
                            </div>
                            <Error>
                                <span className = {showErrorNewPassword ? 'show-error' : "text-error"}>Password should contain at least 8 characters</span>
                            </Error>
                            <div className="code_input_forgot">
                                <input type="text" placeholder="Confirm new password" onChange = { (e) => {setConfNewpassword(e.target.value)}}></input>
                            </div>
                            <Error>
                                <span className = {showErrorConfNewpassword ? 'show-error' : "text-error"}>Not equal to new password</span>
                            </Error>
                            <SendLoginBtn onClick={()=> {preSendNewPassword()}}>Send</SendLoginBtn>
                            <TextElement>
                                <p>Already have an account?</p>
                                <Link className="signUpNow" to="/LogIn" onClick={()=> {setShowForgotWindow(!showForgotWindow)}}>Login now</Link>
                            </TextElement>
                            <TextElement>
                                <p>Not registered yet?</p>
                                <Link className="signUpNow" to="/SignUp">Sign up now</Link>
                            </TextElement>
                        </Info>
                }
            </Window>
        </Container>
    )
}

export default ForgotPasswordWindow

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
    border-radius: 20px;
    background-color: #fff;
    min-width: 800px;
    padding: 30px 40px;

    @media (max-width: 1000px) {
        width: 80%;
        min-width: 250px;
    }

    @media (max-width: 450px) {
        width: 70%;
        min-width: 250px;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
        font-weight: 500;
        line-height: 1.1;
        font-size: 2.5rem;
    }
    p{
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        line-height: 1.7;
        color: #666666;
        margin: 5px 0 30px 0;
    }
`

const SendLoginBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: #00AAE1;
    height: 50px;
    max-width: 600px;
    align-items: center;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: #fff;
    line-height: 25px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 20px;
    cursor: pointer;

    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }
`

const TextElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    p{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #989898;
        margin:0 5px 0 0;
    }

    @media (max-width: 430px) {
        flex-direction: column;
    }
`

const Error = styled.div`
    width: 85%;
    max-width: 600px;
    padding-left: 35px;
    color: red;
    margin-bottom: 20px;
`