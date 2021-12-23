// 부모 display: flex; flex-direction: column
import styled from 'styled-components'

const Div = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40vh;
`;

const Timer = () => {
    return(
        <>
            <Div></Div>        
        </>
    )
}

export default Timer;