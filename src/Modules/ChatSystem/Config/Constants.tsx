import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export const actions = [
    { icon: <FileCopyIcon />, name: 'FriendList', },
    { icon: <SaveIcon />, name: 'Add Friend' },
    { icon: <WorkHistoryIcon />, name: 'Change DB' }
];

export const formValues = [
    {
        name: "email",
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
        type: "text",
        validations: [
            {
                type: "required",
                params: ["password is required"],
            },
        ]
    }
];
