import { memo } from 'react';
import { PageLayout } from 'Layout/Components/PageLayout';

// import { UsingHooks } from "../Components/UsingHooks";  // usetransition and usedifferedvalue
// import { UsingHooks1 } from "../Components/UsingHooks1";  // use
import { TableMethods } from '../Components/TableMethods';

type Props = {};
const Study = (props: Props) => {

    return (
        <PageLayout title="Study" actions={[]} >
            <TableMethods />
        </PageLayout >
    )
}
export default memo(Study);
