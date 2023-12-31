
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

import { NormalTable } from '../../../Components/Table/NormalTable';
import { NormalTableProps } from '../../../Components/Table/NormalTable';

type FriendListProps = {
    dataArray: any[],
    selectFriend: (data: any, type: string) => void
}

export const FriendList: React.FC<FriendListProps> = ({ dataArray = [], selectFriend = () => { } }) => {

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
            component: (data: any) => {
                return <div style={{ display: "flex" }}>
                    <b onClick={() => selectFriend(data, "edit")}><ModeEditIcon /></b>
                    <b onClick={() => selectFriend(data, "select")}><PersonAddAlt1Icon /></b>
                </div>
            },
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
