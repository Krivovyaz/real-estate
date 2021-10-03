import React from 'react'
import styled from 'styled-components'
import './stylesForAdditionalComponents/Investments.css';
import ProgressBar from './ProgressBar';

const REACT_APP_API_URL = 'http://localhost:5000/'

function BasketProject({project}) {
    console.log(project)
    return (
        <Container className="card">
            <div className="card-wrap inv">
                <div className="card-image-inv">
                    <img src={REACT_APP_API_URL + project.project.main_photo}></img>
                </div>
                <div className="card-body-inv">
                    <h4>{project.project.title}</h4>
                    <div className="card-info-inv">
                        <div className="loan-inv">
                            <div className="label-inv">Loan amount</div>
                            <h5>{project.project.loan}</h5>
                        </div>
                        <span className="month-inv">
                            <span className="label-inv">Month</span>
                            <h5>{project.project.month}</h5>
                        </span>
                        <span className="roi-inv">  
                            <span className="label-inv">YR Estimated ROI</span>
                            <h5>{project.project.roi}</h5>
                        </span>
                    </div>
                    <div className="progress-bar inv">
                        <ProgressBar progress={project.project.progress}/>
                    </div>
                    <div className="progress-info inv">
                        <span>{project.project.investors} investors,{project.project.filled}$ filled</span>
                        <span>€{project.project.left}left</span>
                    </div>
                </div>
                    <div className="my-inv">
                        <span className="my-inv-data">My Investment</span>
                        <span className="my-inv-data">{project.project.loan}</span>
                    </div>
            </div>
        </Container>
    )
}

export default BasketProject

const Container = styled.div``