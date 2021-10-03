import React from 'react'
import ProgressBar from './ProgressBar';
import { ProjectsInfo } from '../tempData/ProjectInfo'
import styled from 'styled-components'
import './stylesForAdditionalComponents/Investments.css';

function Investments() {

    const item = ProjectsInfo[0];
    const item2 = ProjectsInfo[1];

    console.log(item);
    return (
        <Container>
            <div className="card">
                <div className="card-wrap inv">
                    <div className="card-image inv">
                        <img src={item.mainPhoto}></img>
                    </div>
                    <div className="card-body inv">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <div className="card-info-inv">
                            <div className="loan-inv">
                                <div className="label-inv">Loan amount</div>
                                <h5>{item.loan}</h5>
                            </div>
                            <span className="month-inv">
                                <span className="label-inv">Month</span>
                                <h5>{item.month}</h5>
                            </span>
                            <span className="roi-inv">  
                                <span className="label-inv">YR Estimated ROI</span>
                                <h5>{item.roi}</h5>
                            </span>
                        </div>
                        <div className="progress-bar inv">
                            <ProgressBar progress={item.progress}/>
                        </div>
                        <div className="progress-info inv">
                            <span>{item.investors} investors,{item.filled}$ filled</span>
                            <span>€{item.left}left</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Investments
const Container = styled.div`
    background-color: blue;
`