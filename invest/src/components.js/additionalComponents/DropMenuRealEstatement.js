import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {MenuItems} from '../tempData/MenuItems';
import './stylesForAdditionalComponents/DropMenuRealEstatement.css';

function DropMenuRealEstatement({open, setOpen}) {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <Container>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.path} onClick={() => {setClick(false); setOpen(!open)}}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </Container>
    )
}

export default DropMenuRealEstatement

const Container = styled.div`
    ul {
        width: 94%;
        margin-top: 0;
    }
`