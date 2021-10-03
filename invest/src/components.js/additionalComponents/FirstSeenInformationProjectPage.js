import {React, useContext} from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import './stylesForAdditionalComponents/FirstSeenInformationProjectPage.css'
import ProgressBar from './ProgressBar';
import SliderProjectPage from './SliderProjectPage';
import { Context } from '../../index';
import { addProjectToCart } from '../../http/UserAPI';

const REACT_APP_API_URL = 'http://localhost:5000/'

function FirstSeenInformationProjectPage({project}) {
    const {user} = useContext(Context);
    const history = useHistory();
    
    console.log('user project')
    console.log(user.user);

    const addProject = async () => {
        if(user.user.id) {
            console.log('added');
            const userId = user.user.id;
            const projectId = project.id;
            try {
                let data;
                data = await addProjectToCart(userId, projectId);
                if(data) {
                    alert('project was added to cart');
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            history.push('/LogIn');
        }
    }

    return (
        <Container>
            <BackgroundPhoto>
                <img src={REACT_APP_API_URL + project.main_photo_for_page}></img>
            </BackgroundPhoto>
            <Description>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <StartInvestBtn onClick={() => {addProject()}}>Add to cart</StartInvestBtn>
            </Description>
            <SlidesContent>
                <ProgressBarContent>
                    <div className="card-info-page"> 
                        <span className="loan-page">
                            <h5>{project.loan}$</h5>
                            <span className="label-page">Loan amount</span>
                        </span>
                        <hr/>
                        <span className="month-page">
                            <h5>{project.month}</h5>
                            <span className="label-page">Month</span>
                        </span>
                        <hr/>
                        <span className="roi-page">  
                            <h5>{project.roi}%</h5>
                            <span className="label-page">YR Estimated ROI</span>
                        </span>
                    </div>
                    <Bar>
                        <ProgressBar progress={project.progress}/>
                        <div className="progress-info-page">
                            <span>{project.investors} investors,{project.filled}$ filled</span>
                            <span>€{project.left}left</span>
                        </div>
                    </Bar>
                </ProgressBarContent>
                <SliderProjectPage project={project}/>
            </SlidesContent>
        </Container>
    )
}

export default FirstSeenInformationProjectPage

const Container = styled.div`
    box-sizing: border-box;
    margin-top: 90px;
    min-height: calc(100vh - 90px);

    h1{
        text-align: left;
        color: #fff;
        font-size: 48px;
        font-weight: 700;
        line-height: 65px;
        padding-bottom: 10px;
    }
    
    p{
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        padding-bottom: 14px;
    }

    @media(max-width: 425px) {
        min-height: calc(100vh - 60px);

        h1{
            font-size: 30px;
            line-height: 30px;
        }
    }
`

const BackgroundPhoto = styled.div`
width: 100%;

img{
    position: absolute;
    top:0;
    left: 0;
    height: calc(100vh - 90px);
    width: 100%;
    z-index: -100;
    object-fit: cover;
    background-size: cover;
    margin-top: 90px;
}

@media(max-width: 425px) {
    img{
        height: calc(100vh - 60px);
        margin-top: 60px;
    }
}

`
const Description = styled.div`
    margin: 19% 0 30px 120px;
    max-width: 650px;

    @media(max-width: 1260px) {
        margin: 19% 0 30px 40px;
    }
`

const StartInvestBtn = styled.div`
    font-size: 20px;
    text-decoration: none;
    background: #00AAE1;
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
    display: inline-block;
    padding: 20px 60px;
    font-weight: 600;
    transition: 0.2s all;
    margin: 30px 0 ;
    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }

    @media(max-width: 425px) {
        padding: 15px 45px;
    }
`

const SlidesContent = styled.div`
    display: flex;
    margin: 0 5%;

    @media(max-width: 1260px) {
        flex-direction: column;
        justify-content: flex-start;
    }

`

const ProgressBarContent = styled.div`
    background-color: #054163;
    padding: 20px 40px;
    width: 400px;
    box-sizing: border-box;
    @media (max-width: 1260px){
        transform: scale(0.85);
        margin-left: -60px;
    } 
    @media (max-width: 7200px){
        transform: scale(0.7);
    } 
`

const Bar = styled.div``