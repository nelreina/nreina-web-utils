import createStoreDOM from './redux/index';
import auth from './redux/auth';
import * as authActions from './redux/auth';
import { get, post } from './api';
// import BootstrapField from './components/BootstrapField';
const api = { get, post };
export { createStoreDOM, auth, authActions, api };
