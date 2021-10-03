import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import warningSign from '../../photo/warningSign.png'

function SuccessActionComponent({setShowSuccessComp}) {
    return (
        <Container>
            <Window>
                 <i class="fas fa-times" onClick={() => {setShowSuccessComp(false)}}></i>
                 <Info>
                    <WarningSign>
                        <i class="fal fa-shield-check"></i>
                    </WarningSign>
                    <h3>Successful action</h3>
                 </Info>
            </Window>
        </Container>
    )
}

export default SuccessActionComponent

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Window = styled.div`
    border-radius: 10px;
    background-color: #fff;
    min-width: 500px;
    width: 35%;
    padding-top: 15px;

    .fa-shield-check{
        font-size: 85px;
        color: green;
        margin-top: 40px;
    }

    .fa-times {
        padding-right: 15px;
    }
`

const WarningSign = styled.div`
    // margin-top: 15px;

`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        font-weight: 700;
        line-height: 1.1;
        font-size: 2.5rem;
        margin: 30px 0 40px 0;
        padding-left: 15px;
    }

    p{
        font-family: 'Open Sans', sans-serif;
        font-size: 25px;
        line-height: 1.7;
        color: #666666;
        margin-top: 20px;
    }
`