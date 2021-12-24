import styled from  'styled-components';
import {useState, useEffect} from 'react';
import {Time} from '../utils/date.js';
//LeftDiv Child
import UpButton from './UpButton';
import DateAndDay from './DateAndDay';
import DownButton from './DownButton';
//RightDiv Child
import Sentence from './Sentence';
import Lists from './Lists';


const LeftDiv = styled.div`
    position: relative;
    z-index: 2;
    width:10vw;
    height:100vh;
    border: 1px solid #4caf50;
    border-right: 0;
    background: black;
    display: flex;
    flex-direction: column;
`;

const RightDiv = styled.div`
position: relative;
    z-index: 2;
    width:100%;
    height:100%;
    border: 1px solid #4caf50;
    display:flex;
    flex-direction: column;
`;

const CBody = () => {
    const [rawTimeInfo, setRawTimeInfo] = useState(Date()); // raw TimeInfo
    const [timeInfo, setTimeinfo] = useState({
        year: null,
        month: null,
        date: null,
        today: null
    });
    const [monthlyTodos, setMonthlyTodos] = useState(null);

    useEffect(() => {
        setTimeinfo({
            year: Time.getYear(rawTimeInfo),
            month: Time.getMonth(rawTimeInfo),
            date: Time.getDate(rawTimeInfo),
            today: Time.getToday(rawTimeInfo)
        })
        setMonthlyTodos(JSON.parse(localStorage.getItem("2021.12")));
    }, [rawTimeInfo])

    return(
        <>
            <LeftDiv>
                <UpButton timeInfo={rawTimeInfo} setTimeInfo={setRawTimeInfo}></UpButton>
                <DateAndDay timeInfo={timeInfo}></DateAndDay>
                <DownButton timeInfo={rawTimeInfo} setTimeInfo={setRawTimeInfo}></DownButton>
            </LeftDiv>
            <RightDiv>
                <Sentence></Sentence>
                <Lists monthlyTodos={monthlyTodos}></Lists>
            </RightDiv>
        </>
    )
};

export default CBody;