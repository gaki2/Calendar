import Home from '../icon/home.svg';
import Calendar from '../icon/calendar.svg';
import Clock from '../icon/clock.svg';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const HeaderDiv = styled.div`
    width:100vw;
    height: 6vh;
    border-bottom: 2px solid black;
    background: #f5f5f5;
    z-index: 10;
    position:absolute;
    top: 0.1px;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconBox = styled.div`
    width: 24px;
    height: 24px;
    margin-top: 5px;
    margin-left: 15px;
    margin-right: 10px;
    margin-bottom: 5px;
    background-image : url(${props => props.src ? props.src : null});
`;


const Header = () => {
    
    return(
        <>
            <HeaderDiv>
                <Link to='/'><IconBox src={Home}></IconBox></Link>
                <Link to='/calendar'><IconBox src={Calendar}></IconBox></Link>
                <Link to='/timer'><IconBox src={Clock}></IconBox></Link>
            </HeaderDiv>
        </>
    )
}

export default Header;