import styled from 'styled-components';
import React from 'react';

const HeaderDiv = styled.div`
    height: 95px;
    background-color: #00081f;
background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
`;


export default function Header() {
    console.log(window.innerHeight);
    return(
        <HeaderDiv></HeaderDiv>
    )
}