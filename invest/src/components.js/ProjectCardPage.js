import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import { useParams} from 'react-router-dom'
import { ProjectsInfo } from './tempData/ProjectInfo';
import FirstSeenInformationProjectPage from './additionalComponents/FirstSeenInformationProjectPage';
import './stylesForMainPages/ProjectCardPage.css'
import GoogleMapComponent from './additionalComponents/GoogleMapComponent';
import {fetchProject} from '../http/ProjectAPI'
import {Context} from '../index'

// const promise = fetchProject("58")


function ProjectCardPage() {

    let { projectId} = useParams();

    const[loading, setLoading] = useState(true);
    // const {project} = useContext(Context);

    const [project, setProject] = useState({})


    // const findproject = () => {
    //     ProjectsInfo.find((item) => {
    //         if(item.id == projectId) {
    //             project = item;
    //         }
    //     })
    // } 
    // findproject();

   useEffect(() => {
        fetchProject(projectId).then( data => setProject(data)).finally(() => {setLoading(false)});
   }, [])

    if (loading) {
        return <Loading>
                  <i class="far fa-spinner fa-spin fa-5x fa-fw"></i>
               </Loading>
    }

    console.log( project.term_article);

    return (
        <Container>
            <FirstSeenInformationProjectPage project={project}/>
            <MainPart>
                <div className="description-project-page">
                    <h4>PROJECT</h4>
                    <p>{project.main_description}</p>
                </div>
                <hr/>
                <div className="location-project-page">
                    <div className="location-text">
                        <h4>LOCATION</h4>
                        <p>{project.location}</p>
                    </div>
                    <div className="location-google">
                        <GoogleMapComponent/>
                    </div>
                </div>
                <hr/>
                <div className="terms">
                    <div className="terms-title">
                        <h4>TERMS</h4>
                    </div>
                    <div className="terms-text">
                        <p>{project.term_title}</p>
                        <ol>
                            {
                                project.term_article.map((article) => {
                                    return(
                                        <li>{article.term}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </MainPart>
        </Container>
    )
}

export default ProjectCardPage


const Container = styled.div`

`
const MainPart = styled.div`
    margin: 100px 50px 160px 50px; 

    hr{
        border: none;
        background-color: #B5BFD6;
        color: #B5BFD6;
        height: 2px;
    }

    h4{
        font-weight: 700;
        font-size: 18px;
        line-height: 33px;
        color: #EA366C;
    }

    p{
        padding-left: 50px;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #282424;
        padding: 0 50px;
    }
    @media(max-width: 460px) {
      p {
          padding: 0;
          text-align: center;
      }
    }
`


const Loading = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
