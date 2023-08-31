
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DeleteIcon from '@mui/icons-material/Delete';

import { NormalTable } from '../../../Components/Table/NormalTable';
import { NormalTableProps } from '../../../Components/Table/NormalTable';
import { PageLayout } from '../../../Layout/Components/PageLayout';

import { ActionComponent } from '../../../Components/Table/NormalTableComponent/ActionComponent';

type FriendListProps = {
    dataArray: any[],
    selectFriend: (data: any, type: string) => void
}

export const FriendList: React.FC<FriendListProps> = ({ dataArray = [], selectFriend = () => { } }) => {

    const headStyle = { backgroundColor: "#e5f3f5", color: "black", textAlign: "start", height: "25px", fontSize: "10px" };
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
                return <ActionComponent actions={
                    [
                        { name: "Edit", icon: <ModeEditIcon style={{ fontSize: "16px" }} />, onClick: () => selectFriend(data.row, "edit") },
                        { name: "Select", icon: <PersonAddAlt1Icon style={{ fontSize: "16px" }} />, onClick: () => selectFriend(data.row, "select") },
                        { name: "Delete", icon: <DeleteIcon color='error' style={{ fontSize: "16px" }} />, onClick: () => selectFriend(data.row, "delete") }
                    ]
                } />
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
        footerStyle: { fontSize: "12px" }
    };

    return (
        <div style={{ margin: "1rem" ,marginTop:0 }}>
            <PageLayout title="Friend List" actions={[]} >
                <NormalTable
                    {...propsForMyComponent}
                />
            </PageLayout>
        </div>
    )
}
