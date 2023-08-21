
import { NormalTable } from '../../../Components/Table/NormalTable';

export const FriendList = ({ dataArray = [] }) => {
    const headStyle = { backgroundColor: "#e5f3f5", color: "black", textAlign: "start", height: "40px", width: "auto" };
    const headers = [
        {
            name: "name",
            headerName: "Name",
            isFilterEnabled: true,
        },
        {
            name: "email",
            headerName: "Email",
            isFilterEnabled: true,
        },
        {
            name: "mobileNo",
            headerName: "Mobile No",
            isFilterEnabled: true,
        },
    ];

    const extraColumn = [
        {
            headerName: "ACTIONS",
            content: <div>Select</div>,
            onClick: (data) => { },
        },
    ];

    return (
        <div>
            <NormalTable
                headers={headers}
                headerStyle={headStyle}
                tableData={dataArray}
                extraColumn={extraColumn}
                capitalizingHeaders={true}
                pagination={true}
                onRowClick={false}
                sortBy={"name"}
            // onChangeRowSelected={(item) => console.log(item)}
            />
        </div>
    )
}
