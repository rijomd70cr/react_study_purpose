
import { useEffect } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';

import { NormalTable } from '../../../Components/Table/NormalTable';
import { NormalTableProps } from '../../../Components/Table/NormalTable';
import { PageLayout } from '../../../Layout/Components/PageLayout';
import { StatusComponents } from '../../../Components/UtilsComponents/HelperComponents';


import { ActionComponent } from '../../../Components/Table/NormalTableComponent/ActionComponent';

type FriendListProps = {
    dataArray: any[],
    selectFriend: (data: any, type: string | undefined) => void,
    userPermission: string
}

export const FriendList: React.FC<FriendListProps> = ({ dataArray = [], selectFriend = () => { }, userPermission }) => {
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
        {
            name: "requestStatus",
            headerName: "Request Status",
            isFilterEnabled: false,
            renderDataContent: (data: any) => {
                if (!data.requestStatus || data.requestStatus === "Cancelled") {
                    return <div> - </div>
                }
                return <StatusComponents data={data.requestStatus} />
            }
        },
    ];
    const style = { visibility: userPermission !== "Admin" ? "hidden" : "visible" };

    const getName = (data: any) => {
        if (data?.requestStatus) {
            if (data?.requestStatus === "Requested") return "Cancel Request";
            if (data?.requestStatus === "Rejected" || data?.requestStatus === "Cancelled") return "Send Request";
            if (data?.requestStatus === "Accepted") return "Un Friend";
        }
        else {
            return "Send Request";
        }
    }

    const getIcon = (data: any) => {
        if (data?.requestStatus) {
            if (data?.requestStatus === "Requested") return <PersonAddDisabledIcon style={{ fontSize: "16px" }} />;
            if (data?.requestStatus === "Rejected" || data?.requestStatus === "Cancelled") return <PersonAddAlt1Icon style={{ fontSize: "16px" }} />;
            if (data?.requestStatus === "Accepted") return <PersonAddDisabledIcon style={{ fontSize: "16px" }} />;
        }
        else {
            return <PersonAddAlt1Icon style={{ fontSize: "16px" }} />;
        }
    }

    const extraColumn = [
        {
            headerName: "ACTIONS",
            component: (data: any) => {
                return <ActionComponent actions={
                    [
                        {
                            name: "Edit", icon: <ModeEditIcon style={{ fontSize: "16px" }} />, onClick: () => selectFriend(data.row, "edit"),
                            style: style
                        },
                        {
                            name: getName(data.row),
                            icon: getIcon(data.row),
                            onClick: () => selectFriend(data.row, getName(data.row))
                        },
                        { name: "Delete", icon: <DeleteIcon color='error' style={{ fontSize: "16px" }} />, onClick: () => selectFriend(data.row, "delete"), style: style }
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
        <PageLayout title="Friend List" actions={[]} >
            <NormalTable
                {...propsForMyComponent}
            />
        </PageLayout>
    )
}
