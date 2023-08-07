import { useRef } from "react";
import { Form } from '../../../Components/FormElements/Formikform/GeneralFormik';

import { formValues } from '../Config/Constants';

export const AddFriendForm = ({ onSubmit = (data) => { } }) => {
    const addFriendRef = useRef(null);
    const initialValues = {
        email: "",
        name: "",
        password: "",
        mobileNo: "",
    };

    return (
        <div>
            <Form
                formValues={formValues}
                initialValues={initialValues}
                onSubmit={onSubmit}
                ref={addFriendRef}
            />
            <button style={{ display: "none" }} id='add-friend-save'
                onClick={() => addFriendRef?.current?.onClick()}>
                Save
            </button>
        </div >
    )
}
