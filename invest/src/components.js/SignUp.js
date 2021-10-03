import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import './stylesForMainPages/SignUp.css'
import mainPhoto from '../photo/signup.svg'
import { Link} from 'react-router-dom';
import { registration} from '../http/UserAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import WarningComponent from './additionalComponents/WarningComponent';
import ActivationForm from './additionalComponents/ActivationForm';
import {validation} from '../services/validationService'

const  SignUp = observer (({setShowFooter}) => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setShowFooter(false);

    const {user} = useContext(Context);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

    const [showWarningWindow, setShowWarningWindow] = useState(false);
    const [showActivationForm, setShowActivationForm] = useState(false);
    
    const checkFields = () => {
        const checkName = validation.isEmpty(name),
              checkPas = validation.checkPassword(password),
              isEmail = validation.checkEmail(email),
              isEqualPas = validation.isEqual(password, confirmPassword);
        
        setErrorName(checkName);
        setErrorEmail(!isEmail);
        setErrorPassword(!checkPas);
        setErrorConfirmPassword(!isEqualPas)
        if( !checkName && checkPas && isEmail && isEqualPas ) {
            signUp()
        } 
    }

    const signUp = async () => {
        try {
            const data = await registration(email, name, password);
            user.setUser(data);
            user.setIsActivated(false);
            setShowActivationForm(true);
        } catch (e) {
            if(e.response.data.message === 'the user with the e-mail already registered'){
                alert(e.response.data.message);
            }
        }
    }


    return (
        <Container>
            <div className="SignUpPhoto">
                <img src={mainPhoto}></img>
            </div>
            <div className="SignUpInfo">
                <h3>Sign up</h3>

                <div className="text-form">
                    <div className="text_input">
                        <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} onClick={ () => {setErrorName(false)}}></input>
                    </div>
                    <div className= {errorName? "text_error" : "hide"}>
                        <p>Can not be empty</p>
                    </div>
                </div>

                <div className="text-form">
                    <div className="text_input">
                        <input type="text" placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)} onClick={ () => {setErrorEmail(false)}}></input>
                    </div>
                    <div className= {errorEmail? "text_error" : "hide"}>
                        <p>Enter coorrect email</p>
                    </div>
                </div>
                
                <div className="password_form">
                    <div className="confirm_password_input">
                        <input type={showPassword ? "text" : "password"} placeholder="Enter your Password" value={password} onChange={e => setPassword(e.target.value)} onClick={ () => {setErrorPassword(false)}}></input>
                        <i class="far fa-eye" onClick={() => {setShowPassword(!showPassword)}}></i>
                    </div>
                    <div className= {errorPassword? "text_error" : "hide"}>
                        <p>Password must be at least 8 characters</p>
                    </div>
                </div>

                <div className="password_form">
                    <div className="confirm_password_input">
                        <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm the password" value = {confirmPassword} onChange={ e => setConfirmPassword(e.target.value)} onClick={ () => {setErrorConfirmPassword(false)}}></input>
                        <i class="far fa-eye" onClick={() => {setShowConfirmPassword(!showConfirmPassword) }}></i>
                    </div>
                    <div className= {errorConfirmPassword ? "text_error" : "hide"}>
                        <p>the password doesn't match</p>
                    </div>
                </div>
                <div className="policy">
                    <div className="policy-first-part-text">
                        <input type="checkbox"/>
                        <p>I agree with</p>
                        <Link className="signUpNow" to="/404">Privacy Policy</Link>
                        <p>and</p>
                    </div>
                    <Link className="signUpNow" to="/404">Terms and Conditions</Link>
                </div>
                    <SignUpBtn onClick={() => {checkFields()}}>Sign up</SignUpBtn>
                <div className="not_registered">
                    <p>Not registered yet?</p>
                    <Link className="signUpNow" to="/LogIn">Login now</Link>
                </div>
            </div>
            {
                showWarningWindow && <WarningComponent setShowWarningWindow={setShowWarningWindow}/>
            }
            {
                showActivationForm && <ActivationForm  setShowActivationForm={setShowActivationForm}/>
            }
        </Container>
    )
})

export default SignUp

const Container = styled.div`
    display: flex;    
    margin-top: 90px;
    @media (max-width: 768px){
        margin-top: 0;
    }
`

const SignUpBtn = styled.div`
    width: 100%;
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
    cursor: pointer;

    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }
`