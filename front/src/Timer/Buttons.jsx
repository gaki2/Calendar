//parent is flex , flex-direction : column;

import styled from 'styled-components';
import SetButton from './SetButton';

const Div = styled.div`
    position:relative;
    z-index: 2;
    display: flex;
    width: 100vw;
    height: 140px;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
`;

const Buttons = () => {
    return(
        <>
            <Div>
                <SetButton></SetButton>
            </Div>
        </>
    )
}

export default Buttons;