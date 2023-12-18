import { memo } from 'react';
import { PageLayout } from '../../../Layout/Components/PageLayout';

type Props = {}
const FAQChatBot = (props: Props) => {
    return (
        <PageLayout title="FAQChatBot" actions={[]} >
            <div>
                FAQChatBot
            </div>
        </PageLayout >
    )
}
export default memo(FAQChatBot);
