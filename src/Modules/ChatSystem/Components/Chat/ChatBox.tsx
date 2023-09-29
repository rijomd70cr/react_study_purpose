
type Props = {
    messages: any[];
}

export const ChatBox = ({ messages }: Props) => {
    return (
        <div>
            {messages?.length === 0 ? <p>No Chats </p> :
                <div>
                    My Chats
                </div>
            }
        </div>
    )
}