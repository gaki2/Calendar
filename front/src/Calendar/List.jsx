import styled from 'styled-components';

const Div = styled.div`
    width: 60vw;
    height: 100px;
    display:flex;
    align-items: center;
`;


const SpanDiv = styled.div`
    width: calc(60vw-30px);
    height: 100px;
    color: white;
    font-size: 80px;
    text-align: center;
    margin-left: 10px;
    line-height: 100px;
    color: ${props => props.checked ? "#4caf50" : "#ffca28"};
`;

const List = ({todo}) => {
    const f = false;
    const t = true;
    return(
        <>
            <Div>
                <SpanDiv checked={t}>{todo}</SpanDiv>
            </Div>
        </>
    )
}

export default List;