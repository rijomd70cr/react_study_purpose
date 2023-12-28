import { useState, useEffect, useMemo } from 'react';

import { PageLayout } from '../../../Layout/Components/PageLayout';
import { SpeedDialMenu } from '../../../Components/Menu/SpeedialMenu';
import { Drawers } from '../../../Components/Drawer/Drawers';
import { FormSelectBox } from '../../../Components/FormElements/FormSelectBox';
import { HeaderText } from "../../../Components/HeaderText";

import { AddFriendForm } from '../Components/AddFriendForm';
import { FriendList } from '../Components/FriendList';
import { FriendRequests } from '../Components/FriendRequests';
import { ChatList } from '../Components/Chat/ChatList';

import { insertFriend, getChatSystemState, friendList, changeDB, deleteFriend, requestFriend, cancelFriend, myRequest, freindRequest, createOrUpdateRomm } from '../Reducer/chatActions';
import { actions } from '../Config/Constants';

import { useAppDispatch, useAppSelector } from "../../../Services/Hook/Hook";
import { getAuthUser } from '../../../Services/Methods/Authmethods';

type ChatSystemProps = {}
const user = { email: "", name: "", password: "", mobileNo: "" };

const ChatSystem: React.FC<ChatSystemProps> = () => {
    const dispatch = useAppDispatch();
    const chatState = useAppSelector(getChatSystemState);

    const [openModal, setOpenModal] = useState('');
    const [initialData, setInitialData] = useState(user);
    const [permission, setPermission] = useState<any>("");
    const openModalOptions: any[] = ["insert", "list", "Requests", "changeDB"];

    const selectOptions = [{ label: "Development", value: "Development" }, { label: "Production", value: "Production" }];
    const [DBValue, setDBValue] = useState('');
    const handleChange = (data: string) => {
        setDBValue(data);
        dispatch(changeDB({ dbName: data }));
    }

    const initialize = () => {
        const user = getAuthUser();
        setPermission(user);

        const controller = new AbortController();
        dispatch(myRequest({}));
        return () => { controller.abort(); };
    }

    useEffect(() => {
        initialize();
        return () => { }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatState.reloadMyRequest])

    useEffect(() => {
        dispatch(friendList({}));
        return () => { }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        if (name === "Friend Requests") {
            setOpenModal("Requests");
        }
    }

    const selectFriend = (data: any, type: string | undefined) => {
        if (type === "Send Request") {
            const payload = { recieverID: data._id }
            dispatch(requestFriend(payload));
        }
        else if (type === "Cancel Request") {
            dispatch(cancelFriend({ recieverID: data._id, status: "Cancelled", isModify: true }));
        }
        else if (type === "delete") {
            dispatch(deleteFriend({ email: data.email }));
        }
        else if (type === "chat") {
            setOpenModal("");
            dispatch(createOrUpdateRomm({ sender: { _id: data._id, name: data.name }, isGroupChat: false }));
        }
        else {
            setInitialData(data);
            setOpenModal("insert");
        }
    }

    const requestSubmission = (type: string, item: any) => {
        if (type === "Accept") {
            dispatch(freindRequest({ senderID: item.senderID._id, status: "Accepted", isModify: true }));
        }
        else {
            dispatch(freindRequest({ senderID: item.senderID._id, status: "Rejected", isModify: true }));
        }
    }

    const chatList = useMemo(() => {
        return chatState.myChatRoomID && <ChatList roomId={chatState.myChatRoomID} messages={chatState.myMessages} />;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatState.myChatRoomID]);

    return (
        <PageLayout title="Chat System" isLoading={chatState.myChatRoomData?.isChatLoading} actions={[]} customMenu={<SpeedDialMenu actions={actions} onClick={onClickSpeedDial} />}>
            {chatList}
            <div>
                <Drawers isOpen={openModalOptions.includes(openModal)} anchor={"right"} onClose={(data) => setOpenModal('')} style={{ width: "45%" }}>
                    <div style={{ margin: "1rem" }}>
                        {openModal === "insert" && permission?.userRole === "Admin" && <AddFriendForm onSubmit={handleSaveForm} initialData={initialData} />}
                        {openModal === "list" && <FriendList userPermission={permission?.userRole} dataArray={chatState.friendList} selectFriend={selectFriend} />}
                        {openModal === "Requests" && <FriendRequests myRequestList={chatState.myRequestList} requestSubmission={requestSubmission} />}
                        {openModal === "changeDB" && <div>
                            <HeaderText style={{ borderBottom: "1px solid #ccc", paddingTop: "8px", padding: "8px" }} title='Select DB' />
                            <FormSelectBox onChange={handleChange} options={selectOptions} label="Select DB" value={DBValue} fullWidth={true} />
                        </div>}
                    </div>
                </Drawers>
            </div>

        </PageLayout >
    )
}
export default ChatSystem;

