import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
    singleSlug : ''
}

export const store = createStore(reducer, initialState);

export default store;