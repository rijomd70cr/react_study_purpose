import { Grid, Card } from '@mui/material';
import moment from 'moment';

import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';

import { PageLayout } from '../../../Layout/Components/PageLayout';
import { UserAvatar } from '../../../Components/UtilsComponents/UserAvatar';

import { getColorCompo } from '../../../Utils/HelperFunctions';

type FriendRequestsProps = {
    myRequestList: any[]
}

export const FriendRequests: React.FC<FriendRequestsProps> = ({ myRequestList }) => {

    return (
        <PageLayout title="Friend Requests" actions={[]} >
            {myRequestList?.length > 0 && myRequestList.map((item, key) => {
                return <Grid container spacing={2} key={key} sx={{ width: "70%", margin: "auto", boxShadow: "1px 0px 0px 3px #cccccc45", padding: "8px" }} >
                    <Grid item md={2} lg={2} >
                        <UserAvatar
                            content={<div style={{ borderRadius: "50%", background: "green", width: 10, height: 10 }}></div>}
                            style={{ width: "45px", background: getColorCompo(key) }}
                            name={item.senderID?.name}
                        />
                    </Grid>
                    <Grid item md={8} lg={8}>
                        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "12px" }}>
                            <thead>
                                <tr style={{ textAlign: "start" }}>
                                    <th>Name</th>
                                    <td>{item.senderID?.name}</td>
                                </tr>
                                <tr style={{ textAlign: "start" }}>
                                    <th>Mobile No</th>
                                    <td>{item.senderID?.mobileNo}</td>
                                </tr>
                                <tr><td colSpan={2} style={{ textAlign: "right" }}> <b>Requested At</b> : {moment(item.updatedAt).format("DD/MM/YYYY")}</td></tr>
                            </thead>
                        </table>
                    </Grid>
                    <Grid item md={2} lg={2} style={{ justifyContent: "space-around", display: "flex", alignItems: "center" }}>
                        <HowToRegIcon color='primary' />
                        <PersonAddDisabledIcon color='error' />
                    </Grid>
                </Grid>
            })}
        </PageLayout >
    )
}



