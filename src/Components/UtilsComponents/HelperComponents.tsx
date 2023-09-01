
type statusProps = {
    data: string,
}

const statusCompo = [{ label: "Cancelled", value: "Cancelled", color: "yellow" }, { label: "Requested", value: "Requested", color: "#146ab6" },
{ label: "Accepted", value: "Accepted", color: "green" }, { label: "Rejected", value: "Rejected", color: "red" }];

export const StatusComponents: React.FC<statusProps> = ({ data }) => {

    return (
        <div>
            {statusCompo.map((item: any, key: number) => {
                if (item.value === data) {
                    return <b key={key} style={{ background: item.color, color: "#fff", padding: "5px", fontSize: "10px" }}>{item.label || " - "} </b>
                }
            })}
        </div>
    )
}