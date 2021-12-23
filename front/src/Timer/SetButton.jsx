//parent is flex , flex-direction : column;
import styled from 'styled-components';
import {useState} from 'react';
import TimeSettingModal from './TimeSettingModal';

const Div = styled.div`
    width: 30%;
    height: 70px;
    border: 1px solid red;
`;

const Button = styled.div`
    widht: 100%;
    height: 100%;
`;

const SetButton = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const CloseModal = () => {
        setIsOpenModal(false);
    }
    return(
        <>
            <Div>
                <Button onClick={() => setIsOpenModal(true)}>시간설정</Button>
                {isOpenModal ? <TimeSettingModal CloseModal={CloseModal}></TimeSettingModal> : null}
            </Div>
        </>
    )
}

export default SetButton;