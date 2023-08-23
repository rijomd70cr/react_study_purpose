
import { NormalTable } from '../../../Components/Table/NormalTable';
import { NormalTableProps } from '../../../Components/Table/NormalTable';

export const FriendList = ({ dataArray = [] }) => {
    const headStyle = { backgroundColor: "#e5f3f5", color: "black", textAlign: "start", height: "40px", width: "auto" };
    const headers = [
        {
            name: "name",
            headerName: "Name",
            isFilterEnabled: false,
        },
        {
            name: "email",
            headerName: "Email",
            isFilterEnabled: false,
        },
        {
            name: "mobileNo",
            headerName: "Mobile No",
            isFilterEnabled: false,
        },
    ];

    const extraColumn = [
        {
            headerName: "ACTIONS",
            content: <div>Select</div>,
            onClick: (data: any) => { },
        },
    ];

    const propsForMyComponent: NormalTableProps = {
        headers: headers,
        headerStyle: headStyle,
        tableData: dataArray,
        extraColumn: extraColumn,
        pagination: true,
        onRowClick: false,
        sortBy: "name",
    };

    return (
        <div>
            <NormalTable
                {...propsForMyComponent}
            />
        </div>
    )
}
