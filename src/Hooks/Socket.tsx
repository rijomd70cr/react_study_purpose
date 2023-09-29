import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Socket, io } from "socket.io-client";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;
const CONNECTION_PORT = "localhost:4000";

type Props = {}

export const useSocket = (props: Props) => {
    socket = io(CONNECTION_PORT);
    return socket;
}


