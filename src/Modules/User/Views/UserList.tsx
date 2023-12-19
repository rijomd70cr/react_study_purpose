import { memo } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { PageLayout } from '../../../Layout/Components/PageLayout';
// import { TableResize } from '../Components/TableResize';
import { DynamicPdfForm } from '../Components/DynamicPdfForm';


type Props = {}
const UserList = (props: Props) => {

    let actions: Array<any> = [
        {
            label: "Add",
            icon: <AddIcon style={{ fontSize: '11px' }} />,
            onClick: (data: Object) => addItem(data),
        },
    ];
    const addItem = (data: Object) => {
    }
    return (
        <PageLayout title="User List" actions={actions} >
            <DynamicPdfForm />
        </PageLayout >
    )
}
export default memo(UserList);
