import styled from  'styled-components';
import {useState} from 'react';
//LeftDiv Child
import UpButton from './UpButton';
import DateAndDay from './DateAndDay';
import DownButton from './DownButton';
//RightDiv Child
import Sentence from './Sentence';


const LeftDiv = styled.div`
    position: relative;
    z-index: 2;
    width:10vw;
    height:100vh;
    border: 1px solid red;
    border-right: 0;
    background: black;
    display: flex;
    flex-direction: column;
`;

const RightDiv = styled.div`
position: relative;
    z-index: 2;
    width:100%;
    height:100%;
    border: 1px solid red;
    display:flex;
`;

const CBody = () => {
    const [timeInfo, setTimeInfo] = useState(Date());

    return(
        <>
            <LeftDiv>
                <UpButton timeInfo={timeInfo} setTimeInfo={setTimeInfo}></UpButton>
                <DateAndDay timeInfo={timeInfo}></DateAndDay>
                <DownButton timeInfo={timeInfo} setTimeInfo={setTimeInfo}></DownButton>
            </LeftDiv>
            <RightDiv>
                <Sentence></Sentence>
            </RightDiv>
        </>
    )
};

export default CBody;