import React, {useContext} from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import {observer} from 'mobx-react-lite'
import './stylesForAdditionalComponents/NavAuthorisation.css'
import {Context} from '../../index'

const NavAuthorisation = observer(() =>{

    const {user} = useContext(Context)
    const history = useHistory();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    }

    const goToUserPaage = () => {
        history.push('/personalAccount');
    }

    return (
        <Container>
            {user.isAuth ? (
                <Buttons>
                        <i class="fas fa-user-circle icon-navbar" onClick={() => goToUserPaage()}></i>
                        <i class="fas fa-arrow-right icon-navbar"
                            onClick={() => logOut()}></i>
                </Buttons>
                ) : 
                (
                <Buttons>
                    <Link to="/SignUp">
                        <SignUpBtn>Sign up</SignUpBtn>
                    </Link>

                    <Link to="/logIn">
                        <LogInBtn >Log in</LogInBtn>
                    </Link>
                </Buttons>
                )
            }

            
        </Container>
    )
})

export default NavAuthorisation

const Container = styled.div`
a{
    text-decoration: none;
    font-size: 18px;
    color: #fff;

}

@media (max-width: 1224px) {
    display:none;
}
`

const Buttons = styled.div`
    display: flex;
    margin: 0 0 0 50px;
`


const SignUpBtn = styled.div`
    background-color: #00aae1;
    padding: 17px 30px;
    outline: none;
    border-radius: 5px;

    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }

`

const LogInBtn = styled.div`
    padding: 15px 36px;
    border: 2px solid #00aae1;
    border-radius: 5px;
    margin: 0 50px 0 20px;

    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
        border: 2px solid #35c4f2;
    }
`

const LogOut = styled.div` 
    padding: 15px 36px;
    border: 2px solid #00aae1;
    border-radius: 5px;
    margin: 0 50px 0 20px;

    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
        border: 2px solid #35c4f2;
    }
`