// 부모 display: flex, flex-direction: column;
import styled from 'styled-components';
import { ReactComponent as ButtonImg } from '../icon/chevronDown.svg';
import {Time} from '../utils/date.js';

const Div = styled.div`
    width:100%;
    height:14vh;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const DownButton = ({timeInfo, setTimeInfo}) => {
    const setYesterday = (e) => {
        e.stopPropagation();
        const copy = new Date(timeInfo);
        Time.setYesterday(copy);
        setTimeInfo(copy);
    }
    return(
        <>
            <Div>
                <ButtonImg onClick={(e) => {setYesterday(e)}} width="5vw" height="5vw" color="#4caf50" style={{cursor:"pointer"}}></ButtonImg>
            </Div>
        </>
    )
}

export default DownButton;