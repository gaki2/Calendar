import styled from 'styled-components';
import React from 'react';

const HeaderDiv = styled.div`
    height: 95px;
    background-color: yellow;
`;


export default function Header() {
    console.log(window.innerHeight);
    return(
        <HeaderDiv></HeaderDiv>
    )
}