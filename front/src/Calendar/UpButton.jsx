import styled from 'styled-components';
import { ReactComponent as ButtonImg } from '../icon/chevronUp.svg';

const Div = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    height: 20vh;
    border-bottom: 1px solid red;
    padding-top: 6vh;
    
    display:flex;
    align-items: center;
    justify-content: center;
`;



const UpButton = () => {
    return(
        <>
            <Div>
                <ButtonImg width="5vw" height="5vw" color="white" style={{cursor:"pointer"}}></ButtonImg>
            </Div>
        </>
    )
}

export default UpButton;