import styled from 'styled-components';
import List from './List';

const Div = styled.div`
z-index: 2;
width:100%;
height: 80vh;
font-size: 5vw;
font-weight: 800;
color: white;
padding-top: 6.4vh;
padding-left: 20px;
display: flex;
flex-direction: column;
`;

const Lists = () => {
    return(
        <>
        <Div>
            <List todo={"피아노 연습"}></List>   
            <List todo={"피아노 연습"}></List>   
        </Div>
        </>
    )
}

export default Lists;