import styled from 'styled-components';
import Counter from './Counter';
// import wood from '../public/Img/wood.jpg';


const Filter = styled.div`
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    width: 100vw;
    background: rgba(0,0,0,0.65);
`;


const Div = styled.div`
    height: 100vh;
    background-image: url("Img/space.jpg");
    background-size: cover;                   
    background-repeat: no-repeat;
`;


const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
`;

const TimerDiv = styled.div`
    width: 600px;
    height: 300px;
    margin: 30px auto;
`;


function LBody() {
    return(
        <>
        <Div>
        <MainDiv>
            <TimerDiv></TimerDiv>
        </MainDiv>
        </Div>
        <Filter></Filter>
        
        <Counter></Counter>
        </>
    )
}

export default LBody;