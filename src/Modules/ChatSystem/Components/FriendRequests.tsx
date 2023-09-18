import { Grid, Tooltip } from '@mui/material';
import moment from 'moment';

import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';

import { PageLayout } from '../../../Layout/Components/PageLayout';
import { UserAvatar } from '../../../Components/UtilsComponents/UserAvatar';

import { getColorCompo } from '../../../Utils/HelperFunctions';

type FriendRequestsProps = {
    myRequestList: any[],
    requestSubmission: (type: string, item: any) => void
}

export const FriendRequests: React.FC<FriendRequestsProps> = ({ myRequestList, requestSubmission }) => {
    const gridStyle = { width: "60%", margin: "auto", marginTop: "8px", padding: "8px", background: "aliceblue" }
    return (
        <PageLayout title="Friend Requests" actions={[]} >
            {myRequestList?.length > 0 && myRequestList.map((item, key) => {
                return <Grid container spacing={2} key={key} sx={gridStyle} >
                    <Grid item md={2} lg={2} >
                        <UserAvatar
                            style={{ width: "45px", background: getColorCompo(key) }}
                            name={item.senderID?.name}
                        />
                    </Grid>
                    <Grid item md={7} lg={7}>
                        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "12px" }}>
                            <thead>
                                <tr ><th style={{ textAlign: "start" }} >{item.senderID?.name}</th></tr>
                                <tr ><th style={{ textAlign: "start" }}>{item.senderID?.mobileNo}</th></tr>
                                <tr><td colSpan={2} style={{ textAlign: "right" }}> <b>Requested At</b> : {moment(item.updatedAt).format("DD/MM/YYYY")}</td></tr>
                            </thead>
                        </table>
                    </Grid>
                    <Grid item md={3} lg={3} style={{ justifyContent: "space-around", display: "flex", alignItems: "center" }}>
                        <Tooltip title="Accept">
                            <HowToRegIcon color='primary' onClick={() => requestSubmission("Accept", item)} />
                        </Tooltip>
                        <Tooltip title="Reject">
                            <PersonAddDisabledIcon color='error' onClick={() => requestSubmission("Reject", item)} />
                        </Tooltip>
                    </Grid>
                </Grid>
            })}
        </PageLayout >
    )
}



