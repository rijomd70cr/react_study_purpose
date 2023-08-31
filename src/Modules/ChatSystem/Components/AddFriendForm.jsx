import { useRef } from "react";
import { Form } from '../../../Components/FormElements/Formikform/GeneralFormik';

import { formValues } from '../Config/Constants';
import { PageLayout } from '../../../Layout/Components/PageLayout';

export const AddFriendForm = ({ onSubmit = (data) => { }, initialData = {} }) => {
    const addFriendRef = useRef(null);

    const actions = [
        { label: "Save", onClick: () => { addFriendRef?.current?.onClick(); } }
    ];

    return (
        <div style={{ margin: "1rem", marginTop: 0 }}>
            <PageLayout title="Add Freind" actions={actions} >
                <Form
                    formValues={formValues}
                    initialValues={initialData}
                    onSubmit={onSubmit}
                    ref={addFriendRef}
                />
            </PageLayout>
        </div >
    )
}
