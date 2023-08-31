import { useRef } from "react";
import { Form } from '../../../Components/FormElements/Formikform/GeneralFormik';

import { formValues } from '../Config/Constants';
import { PageLayout } from '../../../Layout/Components/PageLayout';

export const AddFriendForm = ({ onSubmit = (data) => { }, initialData = {} }) => {
    const addFriendRef = useRef(null);

    const actions = [
        { label: "Save", onClick: () => { addFriendRef?.current?.onClick(); } }
    ];

    const formValues = [
        {
            name: "email",
            label: "Email",
            type: "text",
            disabled: initialData?._id,
            validationType: "string",
            validations: [
                {
                    type: "required",
                    params: ["Email is required"],
                },
                {
                    type: "email",
                    params: ["please enter a valid email"],
                },
            ]
        },
        {
            name: "name",
            label: "Name",
            type: "text",
            validations: [
                {
                    type: "required",
                    params: ["Name is required"],
                },
            ]
        },
        {
            name: "mobileNo",
            label: "MobileNo",
            type: "text",
            validations: [
                {
                    type: "required",
                    params: ["Mobile No is required"],
                },
            ]
        },
        {
            name: "password",
            label: "Password",
            type: initialData?._id ? "text" : "hideColumn",
            validations: [
                {
                    type: "required",
                    params: ["password is required"],
                },
            ]
        }
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
