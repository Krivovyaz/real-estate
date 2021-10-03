import React, {useState} from 'react'
import styled from 'styled-components';
import './stylesForMainPages/TimeSharePage.css'
import mainPhoto from '../photo/tieshareInvestment.jpg'
import Offers from './additionalComponents/Offers';
import AdditionalInformation from './additionalComponents/AdditionalInformation';
import AboutCompanyTimeshare from './additionalComponents/AboutCompanyTimeshare';
import FirstSeenInformationWithBars from './additionalComponents/FirstSeenInformationWithBars';

function TimeSharePage({setShowFooter, projects}) {

    setShowFooter(true);
    const projectsTitle = "Offers for Investments in real estate under construction",
          amountOfProjects = 9,
          titleForFirstSeenInfo = "Timeshare investments",
          descriptionForFirstSeenInfo ="Estate Together Group always ready to help buyers, and anyone who interested in timeshare vacations. Whether ypu are in the ownership market or need to sell your timeshare.";

    const [params, setParams] = useState({
        output1: "40000",
        output2: "14",
        output3: "12"
    });

    const changeParams = (outputName,value) => {
        setParams({...params, [outputName]: value})
    };

    const searchCriteria = Object.values(params);

    return (
        <Container>
            <BackgroundPhoto>
                <img src={mainPhoto}></img>
            </BackgroundPhoto>
            <FirstSeenInformationWithBars params={params}
                                          changeParams={changeParams}
                                          titleForFirstSeenInfo={titleForFirstSeenInfo}
                                          descriptionForFirstSeenInfo={descriptionForFirstSeenInfo}/>
            <Offers projectsTitle={projectsTitle}
                    amountOfProjects={amountOfProjects}
                    searchCriteria={searchCriteria}
                    projects={projects}/>
            <AdditionalInformation/>
            <AboutCompanyTimeshare/>
        </Container>
    )
}

export default TimeSharePage

const Container = styled.div`
`

const BackgroundPhoto = styled.div`
    width: 100%;

    img{
        position: absolute;
        top:0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: -100;
        object-fit: cover;
        background-size: cover;
    }
`