import { PageLayout } from '../../../Layout/Components/PageLayout';

type FriendRequestsProps = {
    myRequestList: any[]
}

export const FriendRequests: React.FC<FriendRequestsProps> = ({ myRequestList }) => {
    console.log(myRequestList, "myRequestList");

    return (
        <PageLayout title="Friend Requests" actions={[]} >

        </PageLayout>
    )
}



