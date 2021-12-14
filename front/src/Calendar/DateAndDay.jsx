// 부모 display: flex, flex-direction: column;
import styled from 'styled-components';
import {Time} from '../utils/date.js';

const Div = styled.div`
    width: 100%;
    height: 66vh;
    border-bottom: 1px solid red;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const Year = styled.p`
font-size: 2vw;
color: #4d4d4d;
`;

const Date = styled.p`
    font-size: 2vw;
    color: white;
`;

const Day = styled.p`
font-size: 3vw;
color: white;
`;



const DateAndDay = ({timeInfo}) => {

    return(
        <>
            <Div>
                <Year>{Time.getYear(timeInfo)}</Year>
                <Date>{Time.getMonth(timeInfo)}.{Time.getDate(timeInfo)}</Date>
                <Day>({Time.getToday(timeInfo)})</Day>
            </Div>
        </>
    )
}

export default DateAndDay;