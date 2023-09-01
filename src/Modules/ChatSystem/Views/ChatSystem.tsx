import { useState, useEffect } from 'react';

import { PageLayout } from '../../../Layout/Components/PageLayout';
import { SpeedDialMenu } from '../../../Components/Menu/SpeedialMenu';
import { Drawers } from '../../../Components/Drawer/Drawers';
import { FormSelectBox } from '../../../Components/FormElements/FormSelectBox';
import { HeaderText } from "../../../Components/HeaderText";

import { AddFriendForm } from '../Components/AddFriendForm';
import { FriendList } from '../Components/FriendList';

import { insertFriend, getChatSystemState, friendList, changeDB, deleteFriend, requestFriend } from '../Reducer/chatActions';
import { actions } from '../Config/Constants';

import { useAppDispatch, useAppSelector } from "../../../Services/Hook/Hook";

type ChatSystemProps = {}
const selectOptions = [{ label: "Development", value: "Development" }, { label: "Production", value: "Production" }];

const user = {
    email: "",
    name: "",
    password: "",
    mobileNo: "",
};

const ChatSystem: React.FC<ChatSystemProps> = () => {
    const dispatch = useAppDispatch();
    const chatState = useAppSelector(getChatSystemState);

    const [openModal, setOpenModal] = useState('');
    const [DBValue, setDBValue] = useState('');
    const [initialData, setInitialData] = useState(user);

    useEffect(() => {
        dispatch(friendList({}));
        return () => { }
    }, [chatState.reload])

    const handleSaveForm = (data: any) => {
        dispatch(insertFriend(data));
        setOpenModal('');
        setInitialData(user);
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

    const selectFriend = (data: any, type: string | undefined) => {
        if (type === "Send Request") {
            const payload = { recieverID: data._id }
            dispatch(requestFriend(payload));
        }
        else if (type === "Un Friend") {
            dispatch(deleteFriend({ email: data.email }));
        }
        else if (type === "Cancel Request") {
            dispatch(deleteFriend({ email: data.email }));
        }
        else if (type === "delete") {
            dispatch(deleteFriend({ email: data.email }));
        }
        else {
            setInitialData(data);
            setOpenModal("insert");
        }
    }

    return (
        <PageLayout title="Chat System" actions={[]} customMenu={<SpeedDialMenu actions={actions} onClick={onClickSpeedDial} />}>
            <div>Contents</div>
            <div>
                <Drawers isOpen={openModal === "insert"} anchor={"right"} onClose={(data) => setOpenModal('')} style={{ width: "45%" }}>
                    <AddFriendForm onSubmit={handleSaveForm} initialData={initialData} />
                </Drawers>
                <Drawers isOpen={openModal === "list"} anchor={"right"} onClose={(data) => setOpenModal('')} style={{ width: "45%" }}>
                    <FriendList dataArray={chatState.friendList} selectFriend={selectFriend} />
                </Drawers>
                <Drawers isOpen={openModal === "changeDB"} anchor={"right"} onClose={(data) => setOpenModal('')} style={{ width: "20%" }}>
                    <div style={{ margin: "1rem" }}>
                        <HeaderText style={{ borderBottom: "1px solid #ccc", paddingTop: "8px", padding: "8px" }} title='Select DB' />
                        <FormSelectBox onChange={handleChange} options={selectOptions} label="Select DB" value={DBValue} fullWidth={true} />
                    </div>
                </Drawers>
            </div>

        </PageLayout>
    )
}
export default ChatSystem;
