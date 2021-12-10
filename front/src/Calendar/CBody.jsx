import styled from  'styled-components';

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
    return(
        <>
            <LeftDiv>
                <UpButton></UpButton>
                <DateAndDay></DateAndDay>
                <DownButton></DownButton>
            </LeftDiv>
            <RightDiv>
                <Sentence></Sentence>
            </RightDiv>
        </>
    )
};

export default CBody;