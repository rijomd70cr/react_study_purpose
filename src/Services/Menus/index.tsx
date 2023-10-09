import DashboardIcon from '@mui/icons-material/Dashboard';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
// import InboxIcon from '@mui/icons-material/Inbox';

interface IRouteDto {
  name: string,
  path: string,
  icon: any,
  submenu: any
}

export const Menu: IRouteDto[] = [
  {
    name: "DashBoard",
    path: "/",
    icon: <DashboardIcon />,
    submenu: []
    // submenu: [{ name: "DashBoard 1", path: "/dashbord", icon: <InboxIcon /> ,submenu:[]}]
  },
  // {
  //   name: "User",
  //   path: "/userList",
  //   icon: <CropOriginalIcon />,
  //   submenu: []
  // },
  // {
  //   name: "Excel",
  //   path: "/excel",
  //   icon: <CropOriginalIcon />,
  //   submenu: []
  // },
  {
    name: "ChatSystem",
    path: "/chatSystem",
    icon: <CropOriginalIcon />,
    submenu: []
  },
  {
    name: "Study",
    path: "/study",
    icon: <CropOriginalIcon />,
    submenu: []
  }
]