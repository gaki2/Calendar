import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

const ModalBackGround = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 1440px;
    height: 975px;
    background-color: rgba(1,1,0.5,0.4);
    z-index: 10;
`;

const ModalDiv = styled.div`
    position: absolute;
    width: 800px;
    height:700px;
    top: 50px;
    left: 320px;
    background-color: pink;
    border-radius: 10px;
    z-index: 100;
`;

const Input = styled.input`
`;

const Button = styled.button`

`;

export default function Modal({setOpenModal}) {
    

    return(<div><ModalDiv>
        <div class="input-group mb-3 mt-3 w-75">
  <input type="text" class="form-control" placeholder="Slow is fast" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Add</button>
  </div>
    </div>
    </ModalDiv>
        <ModalBackGround onClick={() => setOpenModal(false)}></ModalBackGround></div>)
}