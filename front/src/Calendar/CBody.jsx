import styled from 'styled-components';
import CheckList from './CheckList';

const Div = styled.div`
    height: 100vh;
    background-image: url("Img/strayspace.jpg");
    background-size: cover;                   
    background-repeat: no-repeat;
    display:flex;
    // align-items: center;
    // justify-content: center;
`;

const Filter = styled.div`
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    width: 100vw;
    background: rgba(0,0,0,0.64);
`;


const CBody = () => {
    return(
        <>
        <Div>
            <CheckList></CheckList>
        </Div>
        <Filter></Filter>
        </>
    )
}

export default CBody;