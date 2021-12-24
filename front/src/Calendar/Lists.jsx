import styled from 'styled-components';
import List from './List';
import {Time} from "../utils/date.js";
import {useState, useEffect} from 'react';
//test
import todo from "../data.js";

const Div = styled.div`
z-index: 2;
width:100%;
height: 80vh;
font-size: 5vw;
font-weight: 800;
color: white;
padding-top: 6.4vh;
padding-left: 20px;
display: flex;
flex-direction: column;
`;

const Lists = ({monthlyTodos}) => {
    console.log(monthlyTodos);
    const [todayTodo, setTodayTodo] = useState(null); // 오늘이 12월 1일이라고 가정.
    useEffect(() => {
        const todos = monthlyTodos ? monthlyTodos[0] : null
        setTodayTodo(todos);
    }, [monthlyTodos])
    return(
        <>
        <Div>
            {todayTodo ? todayTodo.map(element => {
                return(<List todo={element.todo}></List>);
            }) : null}
        </Div>
        </>
    )
}

export default Lists;