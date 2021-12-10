// 새로고침 후 1초 후에 시간이 나오는 현상 -> state 의 초기값의 중요성! ( 초기값을 잘 넣어주면 시간이 나올때까지의 로딩시간이 없어짐.)

import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

const Span = styled.span`
    color: rgba(255,255,255,0.84);
    font-size: 100px;
    font-family: SF;
    font-weight: 700;
`;

const Div = styled.div`
    position: absolute;
    width: 100vw;
    top: 27vh;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    margin-top: 10px;
`;


const Counter = () => {
    
    const [nowTime, setNowTime] = useState(Date());

    useEffect(() => {
        let timer = setInterval(() => {
            setNowTime(Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    
    function toKorMonth() {
        const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG", "SEP","OCT","NOV","DEC"];
        const nowMonth = nowTime.split(' ')[1].toUpperCase();
        return months.indexOf(nowMonth) + 1;
    }
    function toKorToday() {
        const todays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        const korToday = ['일','월','화','수','목','금','토'];
        const nowToday = nowTime.split(' ')[0];
        return korToday[todays.indexOf(nowToday)];
    }

    const Time = {
        getYear : nowTime.split(' ')[3],
        getMonth : toKorMonth(),
        getDate : nowTime.split(' ')[2],
        getToday : toKorToday(),
        getTime : nowTime.split(' ')[4],
    }

    return(
        <div>

                {nowTime ? <Div><p><Span>{`${Time.getYear}년 ${Time.getMonth}월 ${Time.getDate}일 (${Time.getToday}) `}</Span></p>
                <p><Span>{`${Time.getTime}`}</Span></p></Div> : null}
        </div>
    )
}

export default Counter;