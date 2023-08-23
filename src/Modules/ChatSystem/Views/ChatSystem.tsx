import { useState, useEffect } from 'react';
import { Button } from "@mui/material";

import { PageLayout } from '../../../Layout/Components/PageLayout';
import { SpeedDialMenu } from '../../../Components/Menu/SpeedialMenu';
import { Modal } from '../../../Components/ModalBox'
import { Drawers } from '../../../Components/Drawer/Drawers';
import { FormSelectBox } from '../../../Components/FormElements/FormSelectBox';

import { AddFriendForm } from '../Components/AddFriendForm';
import { FriendList } from '../Components/FriendList';

import { insertFriend, getChatSystemState, friendList, changeDB } from '../Reducer/chatActions';
import { actions } from '../Config/Constants';

import { useAppDispatch, useAppSelector } from "../../../Services/Hook/Hook";

type ChatSystemProps = {}
const selectOptions = [{ label: "Development", value: "Development" }, { label: "Production", value: "Production" }];

const ChatSystem: React.FC<ChatSystemProps> = () => {

    const dispatch = useAppDispatch();
    const chatState = useAppSelector(getChatSystemState);

    const [openModal, setOpenModal] = useState('');
    const [DBValue, setDBValue] = useState('');
    const [initialData, setInitialData] = useState({});


    useEffect(() => {
        dispatch(friendList({}));
        return () => { }
    }, [chatState.reload])

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
        if (name === "Change DB") {
            setOpenModal("changeDB");
        }
    }

    const handleChange = (data: string) => {
        setDBValue(data);
        dispatch(changeDB({ dbName: data }));
    }

    const selectFriend = (data: any, type: string) => {
        console.log(data, "data")
        if (type === "select") {

        }
        else {
            setInitialData(data);
            setOpenModal("insert");
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
                title={openModal === "insert" ? "Add Friend" : "Friend List"}
                fullScreen={false}
                handleAction={() => { }}
                draggable={false}
                maxWidth="md"
                ExtraActions={openModal === "insert" && <Button color="primary" onClick={() => handleAction()}>save</Button>}
            >
                <div>
                    {openModal === "insert" && <AddFriendForm onSubmit={handleSaveForm} initialData={initialData} />}
                    {openModal === "list" && <FriendList dataArray={chatState.friendList} selectFriend={selectFriend} />}
                </div>
            </Modal>

            <Drawers isOpen={openModal === "changeDB"} anchor={"right"} onClose={(data) => setOpenModal('')}>
                <div style={{ width: "90%", marginTop: "1rem", padding: "8px" }}>
                    <p style={{ textAlign: "center" }}>Select DB</p>
                    <FormSelectBox onChange={handleChange} options={selectOptions} label="Select DB" value={DBValue} fullWidth={true} />
                </div>
            </Drawers>

        </PageLayout>
    )
}
export default ChatSystem;
