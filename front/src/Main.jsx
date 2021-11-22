import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import Modal from './Modal';

const MainDiv = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ItemDiv = styled.div`
    width: 130px;
    height: 120px;
    background-color: pink;
    margin-top: 13px;
    margin-left: 10px;
    border-radius: 12px;
    
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Span = styled.span`
    font-size: 24px;
    font-weight: 600;
    color: white;
`;

export default function MainBody() {

    const [openModal, setOpenModal] = useState(false);

    let lis = [];
    for(let i = 0; i < 35; i++) {
        lis.push(<ItemDiv onClick={() => setOpenModal(true)}><Span>{i+1}</Span></ItemDiv>);
    }

    return(
        <div>
        <MainDiv>
            {lis}
        </MainDiv>
        {openModal ? <Modal setOpenModal={setOpenModal}></Modal> : null}
        </div>
    )
}