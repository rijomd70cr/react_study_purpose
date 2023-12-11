import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
            label: `Group By`,
            action: () => props.action("groupBy"),
            icon: <ArrowForwardIosIcon fontSize="small" />,
            style: { display: props.isGrouping ? "block" : "none" }
        },
        {
            label: "Clear All",
            action: () => props.action("clearAll"),
            icon: <ArrowForwardIosIcon fontSize="small" />,
        },
    ];

    return (
        <HoverMenu menuOptions={actions} menuTitleComponent={<MoreVertIcon style={{ cursor: "pointer" }} />} />
    )
}
