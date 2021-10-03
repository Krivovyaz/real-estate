import React, {useContext} from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import './stylesForAdditionalComponents/Offers.css';
import {Context} from '../../index'

function Offers({projectsTitle, amountOfProjects, searchCriteria}) {

    let counterOfCheckedCards = 0,
          counterOfShowedCards = 0;

    const {project} = useContext(Context);

    const checkCriteris = (item, index) => {
        counterOfCheckedCards++;
        if( counterOfShowedCards < amountOfProjects && +item.loan <= +searchCriteria[0] && +item.month <= +searchCriteria[1]  && Math.ceil(item.roi) <= +searchCriteria[2]) {
            counterOfShowedCards++;
            return true;
        } else {
            return false;
        }
    }

    return (
        <Container>
            <div className="header">
                <h3>{projectsTitle}</h3>
            </div>
            <div className="allCards">
                {
                    searchCriteria ? (
                        project.projects.map((item, index) => {
                            if(checkCriteris(item, index)) {
                                return(
                                    <ProjectCard item={item} />
                                )
                            }
                        })):
                        (
                            project.projects.map((item, index) => {
                                if(index < amountOfProjects) {
                                    return(
                                        <ProjectCard item={item}/>
                                    )
                                }
                            })
                        )
                };
                
            </div>
        </Container>
    )
}

export default Offers

const Container = styled.div`
    max-width: 1400px;
    margin: 120px auto 0 auto;
    text-align: center;
    @media (max-width: 468px){
        margin: 60px auto;
    }
`