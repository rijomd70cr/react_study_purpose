import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { useSocket } from '../../../../Hooks/Socket';
import { getAuthUser } from '../../../../Services/Methods/Authmethods';

import "../../Style.css"
import { useFormsInput } from '../../../../Hooks/FormInputHook';
import { ChatBox } from './ChatBox';

type Props = {
    roomId: string,
    messages: any[],
};


export const ChatList = ({ roomId, messages }: Props) => {
    const [initialValues, setInitialValue] = useState({
        value: "", placeholder: "Enter Message", type: "text"
    });
    const fnameprops = useFormsInput({ ...initialValues });
    const socket = useSocket({});
    const [myMessages, setMyMessages] = useState<any>([]);
    const user = getAuthUser();

    const mapMessages = (data: any) => {
        return data.map((item: any) => {
            if (item.senderID === user._id.toString()) {
                return { ...item, isSender: true }
            }
            else { return item }
        });
    }

    useEffect(() => {
        if (socket) { connectToRoom(); }

        socket.on("recieve_message", (data) => {
            const newMessages = mapMessages(data);
            setMyMessages(newMessages)
        });
    }, [socket]);

    useEffect(() => {
        const newMessages = mapMessages(messages);
        setMyMessages(newMessages);
    }, [messages])


    const connectToRoom = () => {
        socket.emit("join_room", roomId); // sending an event 
    }

    const sendMessage = () => {
        const data = {
            message: fnameprops.value,
            room: roomId
        };
        socket.emit("send_message", data); // sending an event 
    }

    return (
        <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
                <div>
                    <b style={{ fontSize: "18px" }}>NAME</b>
                    <div className='chat-div' >
                        <div className='chat-box'>
                            <ChatBox messages={myMessages} />
                        </div>
                        <div className='chatButton'>
                            <input {...fnameprops} style={{ border: "none", outline: "none", height: "30px", width: "90%" }} />
                            <SendIcon color='primary' style={{ fontSize: "18px" }} onClick={sendMessage} />
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}