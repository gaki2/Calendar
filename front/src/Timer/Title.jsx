import styled from 'styled-components'
const TitleDiv = styled.div`
    position: relative;
    z-index: 2;
    margin-top: 6vh;
    width: 100vw;
    height: 100px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Span = styled.div`
    font-family: 'SF';
    font-size: 36px;
   color: white;
    font-weight: 700;
`;

const Title = () => {
    return(
        <>
            <TitleDiv>
                <Span>타이머</Span>
            </TitleDiv>
        </>
    )
}

export default Title;