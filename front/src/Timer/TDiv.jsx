import styled from 'styled-components';
import Timer from './Timer';
import Title from './Title';
import Buttons from './Buttons';

const Div = styled.div`
height: 100vh;
background-image: url("Img/blackhole2.jpg");
background-size: cover;                   
background-repeat: no-repeat;
display:flex;
background-position: center;
flex-direction: column
`;

const Filter = styled.div`
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    width: 100vw;
    background: rgba(0,0,0,0.5);
`;

const TDiv = () => {
    return(
        <>
            <Div>
                <Title></Title>
                <Timer></Timer>
                <Buttons></Buttons>
            </Div>
            <Filter></Filter>
        </>
    )
}

export default TDiv;