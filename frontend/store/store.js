import rootReducer from "../reducers/root_reducer";
import {createStore} from 'redux';

const configureStore = () => createStore(rootReducer);

// window.store = configureStore;
export default configureStore;
