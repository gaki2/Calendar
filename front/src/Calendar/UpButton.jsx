import styled from 'styled-components';
import {Time} from '../utils/date.js';
import { ReactComponent as ButtonImg } from '../icon/chevronUp.svg';

const Div = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    height: 20vh;
    border-bottom: 1px solid #4caf50;
    padding-top: 6vh;
    display:flex;
    align-items: center;
    justify-content: center;
`;



const UpButton = ({timeInfo, setTimeInfo}) => {
    const setTomorrow = () => {
        const copy = new Date(timeInfo);
        Time.setTommorow(copy);
        setTimeInfo(copy);
    }

    return(
        <>
            <Div>
                <ButtonImg onClick={() => setTomorrow()} width="5vw" height="5vw" color="#4caf50" style={{cursor:"pointer"}}></ButtonImg>
            </Div>
        </>
    )
}

export default UpButton;