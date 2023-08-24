import { useRef, useEffect, useState } from "react";
import { Form } from '../../../Components/FormElements/Formikform/GeneralFormik';

import { formValues } from '../Config/Constants';

export const AddFriendForm = ({ onSubmit = (data) => { }, initialData = {} }) => {
    const addFriendRef = useRef(null);
    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {
        if (Object.keys(initialData).length > 0) {
            setInitialValues(initialData);
        }
        return () => { }
    }, [initialData])

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
