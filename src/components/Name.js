import React from "react";
import styled from 'styled-components'

const StyleContainer = styled.div` 
    background-color: #c4c047;
    border-radius: 10px;
    margin: 10px;
    padding: 2px;
    width: 200px;
`
const StyleH3 = styled.h3`
    padding: 0;
    line-height: 15px;
`
const StyleSex = styled.p`
    padding: 0;

`

const Name = (props) => {
    return (
        <StyleContainer className="name-container">
            <StyleH3 key={props.name.birth_year}>{props.name.name}</StyleH3>
            <StyleSex>Sex: {props.name.gender}<p onclick={console.log('clicked')}>+</p></StyleSex>

        </StyleContainer>
    )
}

export default Name;