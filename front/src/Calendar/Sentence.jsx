import React, {useState} from 'react';
import styled from 'styled-components';
// 이 컴포넌트의 부모는 flex 임

const Div = styled.div`
    position:relative;
    z-index: 2;
    width:100%;
    height: 20vh;
    font-size: 8vh;
    font-weight: 800;
    // font-style: italic;
    border-bottom: 1px solid red;
    color: white;
    padding-top: 6.4vh;
    text-align: center;
`;

const Sentence = () => {
    const [sentence, setSentence] = useState(null);
    return(
        <>
            <Div><p>나는 복리인간, 복덩이</p></Div>
        </>
    )
}

export default Sentence;