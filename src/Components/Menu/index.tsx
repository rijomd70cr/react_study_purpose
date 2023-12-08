import * as React from "react";
import { ListItemText, ListItemIcon, MenuItem, Menu, Divider, Box } from "@mui/material";

export type menuItemsProps = {
  name: string;
  action?: () => void;
  icon?: React.ReactElement | undefined;
  needDivider?: boolean;
  isDisabled?: boolean;
  iconStyle?: object;
  style?: object;
};

export type MenuComponentProps = {
  headers: any;
  maxHeight?: string,
  width?: string,
  menuItems: menuItemsProps[];
};

export const MenuComponent = (Props: MenuComponentProps) => {
  const { headers, menuItems, maxHeight, width } = Props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div onClick={(e) => handleClick(e)}>{headers}</div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          style: {
            maxHeight: maxHeight || "30vh",
            width: width || "25ch",
          },
        }}
      >
        {menuItems.map((item, index) => (
          <Box key={index}>
            <MenuItem onClick={item.action} disabled={item.isDisabled}>
              {item.icon && <ListItemIcon style={{ ...item.iconStyle, color: "#1976d2" }}> {item.icon}</ListItemIcon>}
              {item.name && <ListItemText style={{ ...item.style, fontSize: "14px" }}>{item.name}</ListItemText>}
            </MenuItem>
            {item.needDivider && <Divider />}
          </Box>
        ))}
      </Menu>
    </div>
  );
};
