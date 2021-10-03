import React from 'react'
import styled from 'styled-components'
import "./stylesForAdditionalComponents/ProjectCard.css"
import ProgressBar from './ProgressBar';
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';

const REACT_APP_API_URL = 'http://localhost:5000/'

function ProjectCard({item}) {

    const history = useHistory();

    const goToProduct = (id) => {
        if(id) {
            history.push(`/ProjectPage/${id}`)
        }
    }
    console.log('item');
    console.log(item);
    return (
        <Container>
            <div className="card-wrap">
                <div className="card-image">
                    <img src={REACT_APP_API_URL + item.main_photo}></img>
                </div>
                <div className="card-body">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="card-info">
                        <span className="loan">
                            <h5>{item.loan}</h5>
                            <span className="label">Loan amount</span>
                        </span>
                        <hr/>
                        <span className="month">
                            <h5>{item.month}</h5>
                            <span className="label">Month</span>
                        </span>
                        <hr/>
                        <span className="roi">  
                            <h5>{item.roi}</h5>
                            <span className="label">YR Estimated ROI</span>
                        </span>
                    </div>
                    <div className="progress-bar">
                        <ProgressBar progress={item.progress}/>
                    </div>
                    <div className="progress-info">
                        <span>{item.investors} investors,{item.filled}$ filled</span>
                        <span>€{item.left}left</span>
                    </div>
                        <LearnBtn onClick={() => goToProduct(item.id)} >Learn more</LearnBtn>
                </div>
            </div>
        </Container>
    )
}

export default ProjectCard

const Container = styled.div`
    flex-basis: 370px;
    display: inline-block;
    padding: 25px;
    @media (max-width: 468px){
        transform: scale(0.85);
        flex: 1 1 auto;
        padding: 0;
    } 
`

const LearnBtn = styled.div`
    background-color: #00aae1;
    padding: 17px 30px;
    outline: none;
    border-radius: 5px;
    margin-top: 30px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }
`