import React, {useEffect, useState, useContext} from 'react'
import ProgressBar from './ProgressBar';
import { ProjectsInfo } from '../tempData/ProjectInfo'
import styled from 'styled-components'
import './stylesForAdditionalComponents/Investments.css';
import {getBasketProjects} from '../../http/UserAPI'
import { Context } from '../../index';
import BasketProject from './BasketProject';

function Investments() {

    const {user} = useContext(Context);

    const item = ProjectsInfo[0];
    const item2 = ProjectsInfo[1];
    const MyInvestment ='2000$';
    const InvestmentAmount ='14 500$';
    const InvestmentsProjects ='5';
    const MyRevenue ='14 500$';

    console.log(item);

    const[basketProjects, setBasketProjects] = useState();

    useEffect(() => {
        const userId = user.user.id;
        getBasketProjects(userId).then( data => setBasketProjects(data)).then(console.log(basketProjects));
   }, [])

    return (
        <Container>
            <div className="card-row">
                {
                    basketProjects ? basketProjects.basketProjects.map((project) => {
                        return(
                            <BasketProject project={project}/>
                        )
                        
                    }): <span>no projects</span>
                }
                <div className="amount-row">
                    {/* <div className="inv-amount"> */}
                        <div className="inv-wrapper inv-amount">
                            <span className="inv-amount-data">Investment amount</span>
                            <span className="inv-amount-data">{basketProjects ? basketProjects.basketProjects.reduce((sum, current) => sum + +current.project.loan, 0): 0}</span>
                        </div>
                    {/* </div>
                    <div className="inv-projects"> */}
                        <div className="inv-wrapper inv-projects">
                            <span className="inv-proj-data">Investments projects</span>
                            <span className="inv-proj-data">{basketProjects ? basketProjects.basketProjects.length: 0}</span>
                        </div>
                    {/* </div>
                    <div className="inv-revenue"> */}
                        <div className="inv-wrapper inv-revenue">
                            <span className="inv-revenue-data">My month revenue</span>
                            <span className="inv-revenue-data">{basketProjects ? (basketProjects.basketProjects.reduce((sum, current) => sum + (current.project.loan * current.project.roi/current.project.month / 100), 0)).toFixed(1): 0}</span>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </Container>
    )
}

export default Investments
const Container = styled.div``