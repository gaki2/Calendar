import React, {useState} from 'react';
import styled from 'styled-components';
// 이 컴포넌트의 부모는 flex 임

const Div = styled.div`
    position:relative;
    z-index: 2;
    width:100%;
    height: 20vh;
    font-size: 5vw;
    font-weight: 800;
    background-color: black;
    border-bottom: 1px solid #4caf50;
    color: white;
    padding-top: 6.4vh;
    text-align: center;
`;

const Sentence = () => {
    const [sentence, setSentence] = useState("테스트");
    return(
        <>
            <Div><p>{sentence}</p></Div>
        </>
    )
}

export default Sentence;