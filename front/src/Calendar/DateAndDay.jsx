// 부모 display: flex, flex-direction: column;
import styled from 'styled-components';
import {Time} from '../utils/date.js';

const Div = styled.div`
    width: 100%;
    height: 66vh;
    // border-bottom: 1px solid rgb(237,135,75);
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const Year = styled.p`
font-size: 2vw;
color: #888888;
`;

const Date = styled.p`
    font-size: 2vw;
    color: white;
    color:#888888;
`;

const Day = styled.p`
font-size: 3vw;
color: white;
color: #888888;
`;



const DateAndDay = ({timeInfo}) => {

    return(
        <>
            <Div>
                <Year>{timeInfo.year}</Year>
                <Date>{timeInfo.month}.{timeInfo.date}</Date>
                <Day>({timeInfo.today})</Day>
            </Div>
        </>
    )
}

export default DateAndDay;