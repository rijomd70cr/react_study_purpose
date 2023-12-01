import { memo } from 'react';
import { PageLayout } from '../../../Layout/Components/PageLayout';

type Props = {}
const ExcelView = (props: Props) => {

    return (
        <PageLayout title="Excel View" actions={[]} >
            <div>
                Contents
            </div>
        </PageLayout >
    )
}
export default memo(ExcelView);
