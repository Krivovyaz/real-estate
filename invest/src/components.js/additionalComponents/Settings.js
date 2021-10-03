import React, {useContext, useState } from 'react'
import styled from 'styled-components'
import './stylesForAdditionalComponents/Settings.css';
import { Context } from '../../index';
import {changeUserEmail, changeUserPassword, changeUserMobilePhone } from '../../http/UserAPI'
import SuccessActionComponent from './SuccessActionComponent';
import {validation} from '../../services/validationService'

function Settings() {

    const [showSuccessComp, setShowSuccessComp] = useState(false);

    const {user} = useContext(Context);

    const [email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [confNewEmail, setConfNewEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorNewEmail, setErrorNewEmail] = useState(false);
    const [errorConfNewEmail, setErrorConfNewEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confNewPassword, setConfNewPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorNewPassword, setErrorNewPassword] = useState(false);
    const [errorConfNewPassword, setErrorConfNewPassword] = useState(false);

    const [mobilePhone, setMobilePhone]  = useState('');
    const [errorMobilePhone, setErrorMobilePhone] = useState(false);


    
    const changeEmail = () => {
        const isEmail = validation.checkEmail(email),
              isNewEmail = validation.checkEmail(newEmail),
              isEqualEmails = validation.isEqual(newEmail, confNewEmail);


        setErrorEmail(!isEmail);
        setErrorNewEmail(!isNewEmail);
        setErrorConfNewEmail(!isEqualEmails);

        if(isEmail && isNewEmail && isEqualEmails) {
            changeUserEmailInDb();
        }
        
    }

    const changePassword = () => {
        const isPasEmpty = validation.isEmpty(password),
              checkPas = validation.checkPassword(newPassword),
              isEqualPass = validation.isEqual(newPassword, confNewPassword);

        setErrorPassword(isPasEmpty);
        setErrorNewPassword(!checkPas);
        setErrorConfNewPassword(!isEqualPass);

        if(!isPasEmpty && checkPas && isEqualPass) {
            changeUserPasswordInDb();
        }  
    } 

    const changeMobilePhone = () => {
        const isEmptyPhone = validation.isEmpty(mobilePhone);
        setErrorMobilePhone(isEmptyPhone);

        if(!isEmptyPhone) {
            changeUserMobilePhoneInDb();
        }
    } 

    const changeUserPasswordInDb = async() => {
        try {
            console.log('change');
            let data,
                email = user.user.email;
                console.log(password);
            data = await changeUserPassword(email, password, newPassword);
            user.setUser(data);
            setShowSuccessComp(true);
        } catch(e) {
            if(e.response) {
                if(e.response.data.message === 'You entered incorrect password') {
                    alert(e.response.data.message);
                } else {
                    console.log(e.response.data.message);
                }
            }
        }
    }

    const changeUserEmailInDb = async () => {
        try {
            const data = await changeUserEmail(email, newEmail);
            user.setUser(data);
            setShowSuccessComp(true);
        } catch(e) {
            if(e.response) alert(e.response.data.message);
        }
    }

    const changeUserMobilePhoneInDb = async () => {
        try {
            console.log('change');
            let data,
                email = user.user.email;
            data = await changeUserMobilePhone(email, mobilePhone);
            user.setUser(data);
            setShowSuccessComp(true);
        } catch(e) {
            if(e.response) {
                alert(e.response.data.message);
            }
        }
    }

    return (
        <Container>
            <div className="set-form-content">
                <div className= "set-form-title">
                    <p>Change your E-mail address</p>
                </div>
                <div className= "set-form-subtitle">
                    <p>Change your Email</p>
                </div>
                <div className= "data-row">
                    <div className= "set-input-form">
                        <div class="set-input-elem">
                                <input class="set-input-row" placeholder="Enter your E-mail" type="text"  onChange={e => setEmail(e.target.value)} onClick = {() => {setErrorEmail(false)}} />
                        </div>
                        <div className= {errorEmail? "text_error" : "hide"}>
                            <p>Enter correct email</p>
                        </div>
                    </div>
                    <div className= "set-input-form">
                        <div class="set-input-elem">
                                <input class="set-input-row"placeholder="Enter your new E-mail" type="text" onChange={e => setNewEmail(e.target.value)} onClick = {() => {setErrorNewEmail(false)}} />
                        </div>
                        <div className= {errorNewEmail? "text_error" : "hide"}>
                            <p>Enter correct email</p>
                        </div>
                    </div>
                    <div className= "set-input-form">
                        <div class="set-input-elem">
                                <input class="set-input-row" placeholder="Confirm your new E-mail" type="text" onChange={e => setConfNewEmail(e.target.value)} onClick = {() => {setErrorConfNewEmail(false)}} />
                        </div>
                        <div className= {errorConfNewEmail? "text_error" : "hide"}>
                            <p>Not equal to new email</p>
                        </div>
                    </div>
                    <SubmitBtn onClick = {() => {changeEmail()}}>Submit</SubmitBtn>
                </div>
            </div>

            <div className= "user-title password">
                <hr/>
            </div>

            <div className="set-form-content">
                <div className= "set-form-title">
                    <p>Password</p>
                </div>
                <div className= "set-form-subtitle">
                    <p>Change your password</p>
                </div>
                <div className= "data-row">
                    <div className= "set-input-form">
                        <div class="set-input-elem">
                                <input class="set-input-row" placeholder="Enter your password" type="text"  onChange={e => setPassword(e.target.value)} onClick = {() => {setErrorPassword(false)}}/>
                        </div>
                        <div className= {errorPassword? "text_error" : "hide"}>
                            <p>Can not be empty</p>
                        </div>
                    </div>
                    <div className= "set-input-form">
                        <div class="set-input-elem">
                                <input class="set-input-row"placeholder="Enter your new new password" type="text" onChange={e => setNewPassword(e.target.value)} onClick = {() => {setErrorNewPassword(false)}} />
                        </div>
                        <div className= {errorNewPassword? "text_error" : "hide"}>
                            <p>should contain at least 8 characters</p>
                        </div>
                    </div>
                    <div className= "set-input-form">
                        <div class="set-input-elem">
                                <input class="set-input-row" placeholder="Confirm your new password" type="text" onChange={e => setConfNewPassword(e.target.value)} onClick = {() => {setErrorConfNewPassword(false)}} />
                        </div>
                        <div className= {errorConfNewPassword? "text_error" : "hide"}>
                            <p>Not equal to new password</p>
                        </div>
                    </div>
                    <SubmitBtn onClick = {() => {changePassword()}}>Submit</SubmitBtn>
                </div>
            </div>

            <div className= "user-title password">
                <hr/>
            </div>

            <div className="set-form-content">
                <div className= "set-form-title">
                    <p>Phone number</p>
                </div>
                <div className= "set-form-subtitle">
                    <p>Edit your phone number</p>
                </div>
                <div className= "data-row">
                    <div className= "set-input-form">
                        <div class="set-input-elem">
                                <input class="set-input-row" placeholder="Enter your password" type="text"  onChange={e => setMobilePhone(e.target.value)} onClick = {() => {setErrorMobilePhone(false)}}/>
                        </div>
                        <div className= {errorMobilePhone? "text_error" : "hide"}>
                            <p>Can not be empty</p>
                        </div>
                    </div>
                    <SubmitBtn onClick = {() => {changeMobilePhone()}}>Submit</SubmitBtn>
                </div>
            </div>
            {
                showSuccessComp && <SuccessActionComponent setShowSuccessComp={setShowSuccessComp}/>
            }
        </Container>
        
    )
}

export default Settings
const Container = styled.div`
    background-color:#fff;
    border-radius: 10px;
    padding: 40px 60px 60px 40px;

    input {
        min-width: 260px;
    }

    @media(max-width: 400px) {
        padding: 40px 15px 60px 15px;
    }
`
const SubmitBtn = styled.div`
    margin: auto;
    margin-left: 0;
    background-color: #00aae1;
    padding: 15px 56px;
    outline: none;
    border-radius: 5px;
    max-width: 100px;
    margin-top: 30px;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    line-height: 27px;
    color: #fff;
    cursor: pointer;

    :hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }

`
