import styled from "styled-components";

const BackGround = styled.div`
position: fixed;
top:0;
left:0;
background-color: rgba(0,0,0,0.4);
z-index: 100;
height: 100vh;
width: 100%;
overflow-y: hidden;
`;

const ModalDiv = styled.div`
    position: absolute;
    background: white;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 230px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    z-index: 105;
    text-align: center;
`;




function TimeSettingModal({CloseModal}) {

    return(
        <>
        <ModalDiv>
            <span>모달모달모달모달</span>
        </ModalDiv>
        <BackGround onClick={() => CloseModal()}></BackGround>
        </>
    )
}

export default TimeSettingModal;