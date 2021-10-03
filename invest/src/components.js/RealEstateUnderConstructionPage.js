import React, {useState} from 'react'
import styled from 'styled-components';
import mainPhoto from '../photo/realEstate.jpg'
import FirstSeenInformationWithBars from './additionalComponents/FirstSeenInformationWithBars';
import Offers from './additionalComponents/Offers';
import AdditionalInformation from './additionalComponents/AdditionalInformation';
import HowDoesItWork from './additionalComponents/HowDoesItWork';

function RealEstateUnderConstructionPage({setShowFooter, projects}) {

    setShowFooter(true);

    const projectsTitle = "Offers for Investments in real estate under construction",
          amountOfProjects = 9,
          titleForFirstSeenInfo = "Investment in real estate under construction",
          descriptionForFirstSeenInfo ="Take advantage of the high prices after construction is completed. Real estate prices after construction are greater than their prices during construction, which enhances the profits of investors in real estate under construction.";

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
            <FirstSeenInformationWithBars 
                params={params}
                changeParams={changeParams}
                titleForFirstSeenInfo={titleForFirstSeenInfo}
                descriptionForFirstSeenInfo={descriptionForFirstSeenInfo}/>
            <Offers 
                projectsTitle={projectsTitle}
                amountOfProjects={amountOfProjects}
                searchCriteria={searchCriteria}
                projects={projects}/>
            <AdditionalInformation/>
            <AnstructionsAbout>
                <HowDoesItWork/>
            </AnstructionsAbout>
        </Container>
    )
}

export default RealEstateUnderConstructionPage

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
const AnstructionsAbout = styled.div`
    margin: 120px 0;
`