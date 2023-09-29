import { useEffect } from 'react';
import { Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { useSocket } from '../../../../Hooks/Socket';

import "../../Style.css"
import { useFormsInput } from '../../../../Hooks/FormInputHook';
import { ChatBox } from './ChatBox';

type Props = {
    roomId: string,
    messages: any[]
};

const initialValues = {
    value: "", placeholder: "Enter Message", type: "text"
}

export const ChatList = ({ roomId, messages }: Props) => {
    const fnameprops = useFormsInput({ ...initialValues });
    const socket = useSocket({});

    useEffect(() => {
        if (socket) { connectToRoom(); }
        return () => { }
    }, [socket]);

    const connectToRoom = () => {
        socket.emit("join_room", roomId); // sending an event 
    }

    const sendMessage = () => {
        console.log(fnameprops.value);
        socket.emit("send_message", fnameprops.value); // sending an event 
    }

    return (
        <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
                <div>
                    <b style={{ fontSize: "18px" }}>NAME</b>
                    <div className='chat-div' >
                        <div className='chat-box'>
                            <ChatBox messages={messages} />
                        </div>
                        <div className='chatButton'>
                            <input {...fnameprops} style={{ border: "none", outline: "none", height: "30px", width: "90%" }} onKeyPress={sendMessage} />
                            <SendIcon color='primary' style={{ fontSize: "18px" }} onClick={sendMessage} />
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}