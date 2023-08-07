import auth from './Auth';
import home from './DashBoard';
import user from './User';
import excel from './Excel';
import chatSystem from './ChatSystem';


// type rotuerType = {
//     auth: boolean,
//     elementPath: string,
//     name: string,
//     path: string[]
// }
// type comman = { reducer: any, router: rotuerType[] };

// interface MyObjLayout {
//     auth: comman;
//     home: comman
// }
const containers: any = { home: home, auth: auth, user: user, excel: excel, chatSystem: chatSystem };

export default containers