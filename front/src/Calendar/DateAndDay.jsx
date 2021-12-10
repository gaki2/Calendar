// 부모 display: flex, flex-direction: column;
import styled from 'styled-components';

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
font-size: 3vh;
color: #4d4d4d;
`;

const Date = styled.p`
    font-size: 3vh;
    color: white;
`;

const Day = styled.p`
font-size: 4vh;
color: white;
`;



const DateAndDay = ({timeInfo}) => {
    return(
        <>
            <Div>
                <Year>2021</Year>
                <Date>12.19</Date>
                <Day>(금)</Day>
            </Div>
        </>
    )
}

export default DateAndDay;