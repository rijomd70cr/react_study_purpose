import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Socket, io } from "socket.io-client";
import { getAuthToken } from "../Services/Methods/Authmethods";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;
const CONNECTION_PORT = "localhost:4000";

type Props = {}

export const useSocket = (props: Props) => {
    socket = io(CONNECTION_PORT,
        {
            extraHeaders: {
                "my-token": getAuthToken()
            }
        });
    return socket;
}


