import { memo } from 'react';
import { PageLayout } from '../../../Layout/Components/PageLayout';
import AddIcon from '@mui/icons-material/Add';

import { DinoFile } from "../Components/DinoFile";

type Props = {}
const Dino = (props: Props) => {

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
        <PageLayout title="Dino Game" actions={[]}>
            <DinoFile />
        </PageLayout >
    )
}
export default memo(Dino);
