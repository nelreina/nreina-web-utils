import createStoreDOM from './redux/index';
import auth from './redux/auth';
import * as authActions from './redux/auth';
import Api, { get, post } from './api';
// import PrivateRoute from './PrivateRoute';
// import BootstrapField from './components/BootstrapField';
const api = { get, post };
export { createStoreDOM, auth, authActions, api, Api };
