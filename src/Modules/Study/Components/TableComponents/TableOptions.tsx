import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PaymentsIcon from '@mui/icons-material/Payments';

import { HoverMenu, menuOptionsProps } from "Components/Menu/HoverMenu";

type Props = {
    label: string,
    action: (type: string) => void,
    isGrouping?: boolean,
    [x: string]: any;
}

export const TableOptions = (props: Props) => {

    const actions: menuOptionsProps[] = [
        {
            label: `Group By ${props.label}`,
            action: () => props.action("groupBy"),
            icon: <PaymentsIcon fontSize="small" color='primary' />,
            style: { color: "#1976d2", display: props.isGrouping ? "block" : "none" }
        },
    ];

    return (
        <HoverMenu menuOptions={actions} menuTitleComponent={<MoreVertIcon style={{ cursor: "pointer" }} />} />
    )
}
