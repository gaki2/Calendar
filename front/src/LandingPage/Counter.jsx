// 새로고침 후 1초 후에 시간이 나오는 현상 -> state 의 초기값의 중요성! ( 초기값을 잘 넣어주면 시간이 나올때까지의 로딩시간이 없어짐.)

import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {Time} from '../utils/date.js';

const Span = styled.span`
    color: rgba(255,255,255,0.84);
    font-size: 8vw;
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

    return(
        <div>

                {nowTime ? <Div><p><Span>{`${Time.getYear(nowTime)}년 ${Time.getMonth(nowTime)}월 ${Time.getDate(nowTime)}일 (${Time.getToday(nowTime)}) `}</Span></p>
                <p><Span>{`${Time.getTime(nowTime)}`}</Span></p></Div> : null}
        </div>
    )
}

export default Counter;