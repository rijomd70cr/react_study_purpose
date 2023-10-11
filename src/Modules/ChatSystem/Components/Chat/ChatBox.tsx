import moment from 'moment';

type Props = {
    messages: any[];
}

export const ChatBox = ({ messages }: Props) => {
    return (
        <div>
            {messages?.length === 0 ? <p style={{ textAlign: "center" }}>No Chats Found </p> :
                messages.map((item: any, key: number) => {
                    return <>
                        {!item.isSender ? <div style={{ textAlign: "left", margin: "5px", fontSize: 12 }}>
                            <table style={{ width: "100%", marginTop: "5px" }}>
                                <thead>
                                    <tr><td>  {item.sender} {moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</td></tr>
                                    <tr><td> <span style={{ padding: "6px", background: "#ccc" }}>{item.messageContent}</span></td></tr>
                                </thead>
                            </table>
                        </div> : <div style={{ textAlign: "right", margin: "5px", fontSize: 12 }}>
                            <table style={{ width: "100%", marginTop: "5px" }}>
                                <thead>
                                    <tr><td>{moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</td></tr>
                                    <tr><td><span style={{ padding: "6px", background: "aliceblue" }}>{item.messageContent}</span></td></tr>
                                </thead>
                            </table>
                        </div>}
                    </>
                })
            }
        </div>
    )
}