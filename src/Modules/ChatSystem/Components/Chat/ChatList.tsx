import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Socket, io } from "socket.io-client";

import "../../Style.css"
import { useFormsInput } from '../../../../Hooks/FormInputHook';
import { ChatBox } from './ChatBox';

type Props = {
    userData: any,
}
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;
const CONNECTION_PORT = "localhost:4000";

const initialValues = {
    value: "", placeholder: "Enter Message", type: "text"
}

export const ChatList = ({ userData }: Props) => {
    const [user, setUser] = useState<any>({});
    const fnameprops = useFormsInput({ ...initialValues });

    useEffect(() => {
        socket = io(CONNECTION_PORT);
        return () => { }
    }, []);

    useEffect(() => {
        if (Object.keys(userData).length > 0) {
            setUser(userData);
            connectToRoom();
        }
        return () => { }
    }, [userData])

    const connectToRoom = () => {
        socket.emit("join_room", userData._id); // sending an event 
    }

    const sendMessage = () => {
        console.log(fnameprops.value);
        socket.emit("send_message", fnameprops.value); // sending an event 
    }

    return (
        <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
                {user.name &&
                    <div>
                        <b style={{ fontSize: "18px" }}>{user.name}</b>
                        <div className='chat-div' >
                            <div className='chat-box'>
                                <ChatBox />
                            </div>
                            <div className='chatButton'>
                                <input {...fnameprops} style={{ border: "none", outline: "none", height: "30px", width: "90%" }} onKeyPress={sendMessage} />
                                <SendIcon color='primary' style={{ fontSize: "18px" }} onClick={sendMessage} />
                            </div>
                        </div>
                    </div>
                }
            </Grid>
        </Grid>
    )
}