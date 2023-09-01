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
            md: 6,
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
            md: 6,
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
            md: 6,
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
            md: 6,
            type: initialData?._id ? "hideColumn" : "text",
            validations: [
                {
                    type: "required",
                    params: ["password is required"],
                },
            ]
        }
    ];

    return (
        <PageLayout title="Add Freind" actions={actions} >
            <Form
                formValues={formValues}
                initialValues={initialData}
                onSubmit={onSubmit}
                ref={addFriendRef}
            />
        </PageLayout>
    )
}
