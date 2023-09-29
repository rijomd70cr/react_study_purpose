import React from 'react';
import Tooltip from '@mui/material/Tooltip';

type ActionComponentProps = {
    actions: any[]
}

export const ActionComponent: React.FC<ActionComponentProps> = ({ actions = [] }) => {
    return (
        <div style={{ display: "flex" }}>
            {actions.length > 0 &&
                actions.map((item, key) => {
                    if (item.enablle) {
                        return <b key={key} onClick={() => item?.onClick()}
                            style={{ paddingRight: "1rem", color: "#1976d2", cursor: "pointer", ...item?.style }}>
                            <Tooltip title={item?.name || ""} arrow>
                                {item?.icon}
                            </Tooltip>
                        </b>
                    }
                })
            }
        </div>
    )
}

