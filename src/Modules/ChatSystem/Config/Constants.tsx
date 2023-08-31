import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const actions = [
    { icon: <FileCopyIcon color='warning' />, name: 'FriendList', },
    { icon: <AddCircleIcon color='success' />, name: 'Add Friend' },
    { icon: <WorkHistoryIcon color='info' />, name: 'Change DB' }
];

export const formValues = [
    {
        name: "email",
        label: "Email",
        type: "text",
        disabled: false,
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
        type: "text",
        disabled: false,
        validations: [
            {
                type: "required",
                params: ["password is required"],
            },
        ]
    }
];
