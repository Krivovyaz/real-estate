import React, {useState} from 'react'
import styled from 'styled-components';
import mainPhoto from '../photo/FinishedRealEstate.jpg'
import FirstSeenInformationWithBars from './additionalComponents/FirstSeenInformationWithBars';
import Offers from './additionalComponents/Offers';
import AdditionalInformation from './additionalComponents/AdditionalInformation';
import WhyShouldUInvest from './additionalComponents/WhyShouldUInvest';

function FinishedRealEstatePage({setShowFooter, projects}) {

    setShowFooter(true);

    const projectsTitle = "Offers for Investments in real estate under construction",
          amountOfProjects = 9,
          titleForFirstSeenInfo = "Investment in finished real estate",
          descriptionForFirstSeenInfo ="Estate Together Group offers absolute transparency about what you actually own. Each of our portfolios offers access to a combination of some or all of the listed projects below, plus ongoing updates about the progress of individual investments.";

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
            <WhyShouldUInvest/>
        </Container>
    )
}

export default FinishedRealEstatePage

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
        
        @media (min-width: 768px) {
         height: 100%;
        } 
    }
`