import React, {useContext, useState } from "react";
import styled from 'styled-components'
import './stylesForAdditionalComponents/MyProfile.css';
import { Context } from '../../index';
import {changeUserInfo} from '../../http/UserAPI'

  

function MyProfile() {
    const {user} = useContext(Context);

    const [name, setName] = useState(user.user.name); 
    const [lastName, setLastName] = useState(user.user.lastName); 
    const [gender, setGender] = useState(user.user.gender); 
    const [dateOfBirth, setDateOfBirth] = useState(user.user.dateOfBirth);
    const [citizenship, setCitizenship] = useState(user.user.citizenship);
    const [accountNumber, setAccountNumber] = useState(user.user.accountNumber);
    const [bicCode, setBicCode] = useState(user.user.bicCode);

    const changeUserDataInDb = async () => {
       try {
           let data;
           const email = user.user.email;
           data = await changeUserInfo(email, name, lastName, gender, dateOfBirth, citizenship, accountNumber, bicCode);
           user.setUser(data);
           console.log(user.user);

       } catch (e) {
        if(e.response) {
            alert(e.response.data.message);
        }
       }
    }

    // const [email, setEmail] = useState(''); 
    // const [password, setPassword] = useState(''); 
    // const [errorEmail, setErrorEmail] = useState(false); 
    
 
    // const validateEmail = () => { 
    //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    //     if(re.test(email)) { 
    //         setErrorEmail(false); 
    //     } else { 
    //         setErrorEmail(true); 
    //     } 
    // }

    return (
        <Container>
            <div className= "user-title">
                <p>My personal data</p>
            </div>
            <div className= "data-body">
                <div className= "data-content">
                    <div className= "user-info">
                        <div className= "user-photo">
                            <i class="fas fa-user-circle myProfileIcon"></i>
                        </div>
                        <div className="user-info-text">
                            <p>Your Name</p>
                            <ul>
                                <li className="user-data"> <i class="fas fa-phone-alt"></i> Your phone {user.user.phoneNumber}</li>
                                <li className="user-data"> <i class="fas fa-envelope"></i> Your e-mail: {user.user.email}</li>
                            </ul>
                        </div>
                    </div>
                    <div className= "data-subtitle">
                        <p>Enter Your data:</p>
                    </div>
                    <div className= "data-row">
                        <div className= "data-forms">
                            <div className= "name">
                                <div class="input-holder_1">
                                    <p>Name</p>
                                    <input placeholder={ user.user.name ? `${user.user.name}`: "Your name"} type="text" class="row-small" onChange={e => setName(e.target.value)}/>
                                </div>
                                <div class="input-holder_1">
                                    <p>Last name</p>
                                    <input placeholder={ user.user.lastName ? `${user.user.lastName}`: "Your last name"} type="text" class="row-small" onChange={e => setLastName(e.target.value)}/>
                                </div>
                            </div>
                            <div className= "about">
                            <div class="input-holder_2">
                                    <p>Gender</p>
                                    <input  placeholder={ user.user.gender ? `${user.user.gender}`: "Male/Female"} type="text" class="row-big" onChange={e => setGender(e.target.value)}/>
                                </div>
                                <div class="input-holder_2">
                                    <p>Date of birth</p>
                                    <input placeholder={ user.user.dateOfBirth ? `${user.user.dateOfBirth}`: "_/_/_"} type="text" class="row-big" onChange={e => setDateOfBirth(e.target.value)}/>
                                </div>
                                <div class="input-holder_2">
                                    <p>Citizenship</p>
                                    <input placeholder={ user.user.citizenship ? `${user.user.citizenship}`: "Write the country"} type="text" class="row-big" onChange={e => setCitizenship(e.target.value)}/>
                                </div>
                            </div>
                            <div className= "account">
                                <div class="input-holder_1">
                                        <p>Account number</p>
                                        <input placeholder={ user.user.accountNumber ? `${user.user.accountNumber}`: "Account number"} type="text" class="row-small" onChange={e => setAccountNumber(e.target.value)}/>
                                    </div>
                                    <div class="input-holder_1">
                                        <p>BIC/SWIFT CODE</p>
                                        <input placeholder={ user.user.bicCode ? `${user.user.bicCode}`: "BIC or SWIFT code number"} type="text" class="row-small" onChange={e => setBicCode(e.target.value)}/>
                                </div>
                            </div>
                            <SubmitBtn onClick = {() => {changeUserDataInDb()}}>Submit</SubmitBtn>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MyProfile
const Container = styled.div`
    background-color:#fff;
    border-radius: 10px;
    padding: 40px 60px 60px 40px;

    @media(max-width: 425px) {
        padding: 40px 20px 40px 20px;
    }
`
const SubmitBtn = styled.div`
    margin-left: auto;
    margin-right: 0;
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

    @media (max-width: 500px) {
        margin-right: auto;
        margin-left: 0;
    }
`
