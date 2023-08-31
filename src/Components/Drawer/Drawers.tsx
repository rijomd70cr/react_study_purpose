import React from 'react'
import Drawer from '@mui/material/Drawer';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type Props = {
    isOpen: boolean,
    anchor: Anchor,
    onClose: (data: boolean) => void,
    children: string | JSX.Element | JSX.Element[],
    style?: React.CSSProperties
}

export const Drawers = ({ isOpen, anchor, onClose = (data) => { }, children, style = {} }: Props) => {

    return (
        <div>
            <React.Fragment key={anchor}>
                <Drawer
                    anchor={anchor}
                    open={isOpen}
                    onClose={() => onClose(false)}
                    PaperProps={{ sx: style }}
                >
                    {children}
                </Drawer>
            </React.Fragment>
        </div>
    )
}