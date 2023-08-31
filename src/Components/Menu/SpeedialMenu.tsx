import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, SpeedDial } from '@mui/material';
import { SpeedDialIcon, SpeedDialAction } from '@mui/material';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

interface Props {
    actions: any[];
    onClick: (data: String) => void
}

export const SpeedDialMenu: React.FC<Props> = ({ actions = [], onClick }) => {

    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <StyledSpeedDial
                ariaLabel="SpeedDial playground example"
                hidden={false}
                sx={{ '& .MuiFab-primary': { width: 30, height: 30, '& .MuiSpeedDialIcon-icon': { fontSize: 20 }, borderRadius: "2%" }, position: "static", height: "40px" }}
                icon={<SpeedDialIcon />}
                direction="left"
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => onClick(action.name)}
                        sx={{ borderRadius: "2%", width: 30, height: 30 }}
                    />
                ))}
            </StyledSpeedDial>
        </Box >
    );
}