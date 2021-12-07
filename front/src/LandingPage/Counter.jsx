import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

const Span = styled.span`
    color: rgba(255,255,255,0.84);
    font-size: 100px;
    font-family: 'Nanum Gothic', sans-serif;
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
    const [nowTime, setNowTime] = useState({
        year: null,
        month: null,
        date: null,
        day: null,
        hour: null,
        min: null,
        sec: null,
    });

    useEffect(() => {
        let timer = setInterval(() => {
            settingTime();
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const settingTime = () => {
        let week = ['일', '월', '화', '수', '목', '금', '토'];
        setNowTime({
            year: new Date().getFullYear(),
            month: (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1),
            date: new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate(),
            day : week[new Date().getDay() + 1], 
            hour: new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours(),
            min: new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes(),
            sec: new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() :new Date().getSeconds()
        })
        console.log(nowTime);
    } 
    return(
        <div>
                {nowTime.year ? <Div><p><Span>{`${nowTime.year}년 ${nowTime.month} 월 ${nowTime.date}일 (${nowTime.day}) `}</Span></p>
                <p><Span>{`${nowTime.hour}:${nowTime.min}:${nowTime.sec}`}</Span></p></Div> : <Div><Span>Loading...</Span></Div>}
        </div>
    )
}

export default Counter;