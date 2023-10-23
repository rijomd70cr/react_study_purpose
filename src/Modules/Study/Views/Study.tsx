import { memo } from 'react';
import { PageLayout } from '../../../Layout/Components/PageLayout';
import AddIcon from '@mui/icons-material/Add';

import { UsingHooks } from "../Components/UsingHooks";  // usetransition and use differed
import { UsingHooks1 } from "../Components/UsingHooks1";

type Props = {}
const Study = (props: Props) => {

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
        <PageLayout title="Study" actions={[]} >
            <UsingHooks1 />
        </PageLayout >
    )
}
export default memo(Study);
