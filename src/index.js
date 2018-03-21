import createStoreDOM from './redux/index';
import { get, post } from './api';
// import BootstrapField from './components/BootstrapField';
const api = { get, post };
export { createStoreDOM, api };
