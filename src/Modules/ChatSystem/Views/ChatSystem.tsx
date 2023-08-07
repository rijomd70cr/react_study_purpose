import { useState } from 'react';
import { Button } from "@mui/material";

import { PageLayout } from '../../../Layout/Components/PageLayout';
import { SpeedDialMenu } from '../../../Components/Menu/SpeedialMenu';
import { Modal } from '../../../Components/ModalBox'

import { AddFriendForm } from '../Components/AddFriendForm';
import { insertFriend, getChatSystemState } from '../Reducer/chatActions';
import { actions } from '../Config/Constants';

import { useAppDispatch, useAppSelector } from "../../../Services/Hook/Hook";


type Props = {}
const ChatSystem = (props: Props) => {
    const dispatch = useAppDispatch();
    const chatState = useAppSelector(getChatSystemState);
    const [openModal, setOpenModal] = useState('');

    const handleAction = () => {
        const button = document.getElementById('add-friend-save');
        if (button) { button?.click(); }
    }

    const handleSaveForm = (data: any) => {
        dispatch(insertFriend(data));
        setOpenModal('');
    }

    const onClickSpeedDial = (name: String) => {
        if (name === "Add Friend") {
            setOpenModal("insert");
        }
        if (name === "FriendList") {
            setOpenModal("list");
        }
    }

    return (
        <PageLayout title="Chat System" actions={[]} customMenu={<SpeedDialMenu actions={actions} onClick={onClickSpeedDial} />}>
            <div>
                Contents
            </div>
            <Modal
                open={openModal === "insert" || openModal === "list"}
                handleClose={() => setOpenModal('')}
                title="Add Friend"
                fullScreen={false}
                handleAction={() => { }}
                draggable={false}
                maxWidth="md"
                ExtraActions={<Button color="primary" onClick={() => handleAction()}>save</Button>}
            >
                <div>
                    {openModal === "insert" && <AddFriendForm onSubmit={handleSaveForm} />}
                </div>
            </Modal>
        </PageLayout>
    )
}
export default ChatSystem;
