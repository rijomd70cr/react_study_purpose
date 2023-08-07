import userSlice from './Reducer/UserSlice';
import Routes from './Router';

const containers = {
    "reducer": userSlice,
    "router": Routes,
    "moduleName":"User"
}

export default containers