import React, {useState} from 'react'
import styled from 'styled-components'
import './stylesForMainPages/UserPage.css';
import MyProfile from './additionalComponents/MyProfile';
import Settings from './additionalComponents/Settings';
import Investments from './additionalComponents/Investments';

function UserPage() {
    const [showComponent, setShowComponent] = useState('1');
    return (
        <Container>
            <div className="profile-block">
                <div className="profile-left-navBar">
                    <div className="profile-navBar-content">
                        <ul className="navBar-list">
                            <li className={showComponent === '1' ? "focused-text list-element" : "list-element"} onClick={() => {setShowComponent('1')}}> <i class="fas fa-user" ></i> My profile</li>
                            <li className={showComponent === '2' ? "focused-text list-element" : "list-element"} onClick={() => {setShowComponent('2')}}> <i class="fas fa-user-circle user-icon"></i> Investments</li>
                            <li className={showComponent === '3' ? "focused-text list-element" : "list-element"} onClick={() => {setShowComponent('3')}}> <i class="fas fa-cog"></i> Settings</li>
                            <li className={showComponent === '4' ? "focused-text list-element" : "list-element"} onClick={() => {setShowComponent('4')}}> <i class="fas fa-home"></i>Dashboard</li>
                        </ul>
                    </div>
                </div>
                <div className="profile-right-data">
                {
                    showComponent === "1" && <MyProfile/>
                }
                {
                    showComponent === "2" && <Investments/>
                }
                {
                    showComponent === "3" && <Settings/>
                }
                </div>
            </div>
        </Container>
    )
}

export default UserPage

const Container = styled.div`
    background-color: #E6ECEF;
    
`
