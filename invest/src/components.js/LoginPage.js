import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import './stylesForMainPages/LogInPage.css'
import mainPhoto from '../photo/LogIn.svg'
import { Link, useHistory } from 'react-router-dom';
import ForgotPasswordWindow from './additionalComponents/ForgotPasswordWindow';
import { observer } from 'mobx-react-lite';
import { login } from '../http/UserAPI';
import { Context } from '../index';
import ActivationForm from './additionalComponents/ActivationForm';

const LoginPage = observer (({setShowFooter}) => {
    setShowFooter(false);

    const {user} = useContext(Context);
    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false);
    const [showForgotWindow, setShowForgotWindow] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [showActivationForm, setShowActivationForm] = useState(false);

    const logIn= async () => {
        try {
            let data;
            data = await login(email, password);
            user.setUser(data);
            console.log(data);
            if(data.isActivated) {
                history.push('/');
                user.setIsAuth(true);
                user.setIsActivated(true);
            } else {
                setShowActivationForm(true); 
                console.log('not activated')
            }
        } catch (e) {
            if(e.response) {
                alert(e.response.data.message);
            }
        }
    }

    return (
        <Container>
            <div className="LogInPhoto">
                <img src={mainPhoto}></img>
            </div>
            <div className="LogInInfo">
                <h3>Login</h3>
                <div className="email_input">
                    <input type="text" placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="password_input">
                    <input type={showPassword ? "text" : "password"} placeholder="Enter your Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <i class="far fa-eye" onClick={() => {setShowPassword(!showPassword)}}></i>
                </div>
                <div className="forgot_password">
                    <div className="remeberMe">
                        <input type="checkbox"/>
                        <p>Remember me</p>
                    </div>
                    <p className="forgot_password_text" onClick={() => {setShowForgotWindow(!showForgotWindow)}}>Forgot Password?</p>
                </div>
                {/* <Link className="logInBtn" to="/personalAccount"> */}
                    <LogInBtn onClick={() => {logIn()}}>Login</LogInBtn>
                {/* </Link> */}
                <div className="not_registered">
                    <p>Not registered yet?</p>
                    <Link className="signUpNow" to="/SignUp">Sign up now</Link>
                </div>
            </div>
            {
                showForgotWindow && <ForgotPasswordWindow showForgotWindow={showForgotWindow} setShowForgotWindow={setShowForgotWindow}/>
            }
            {
                showActivationForm && <ActivationForm  setShowActivationForm={setShowActivationForm}/>
            }
        </Container>
    )
})

export default LoginPage

const Container = styled.div`
    display: flex;    
    margin-top: 90px;
    height: calc(100vh - 90px);
    @media (max-width: 768px){
        margin-top: 0;
    }
`

const LogInBtn = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    background: #00AAE1;
    height: 50px;
    max-width: 500px;
    align-items: center;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: #fff;
    line-height: 25px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 30px;

    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }
`