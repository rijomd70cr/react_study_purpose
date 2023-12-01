import { memo } from 'react';
import { PageLayout } from '../../../Layout/Components/PageLayout';
import AddIcon from '@mui/icons-material/Add';

// import { UsingHooks } from "../Components/UsingHooks";  // usetransition and usedifferedvalue
// import { UsingHooks1 } from "../Components/UsingHooks1";  // use

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
        </PageLayout >
    )
}
export default memo(Study);
