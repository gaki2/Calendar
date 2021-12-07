import Home from '../icon/home.svg';
import Calendar from '../icon/calendar.svg';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    width:100vw;
    height: 47px;
    border-bottom: 3px solid black;
    background: rgba(255,255,255,0.93);
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
                <IconBox src={Home}></IconBox>
                <IconBox src={Calendar}></IconBox>
            </HeaderDiv>
        </>
    )
}

export default Header;