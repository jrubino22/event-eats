import {createStore, combineReducers, applyMiddleware} from 'redux';
import {MenuItems} from './menu-items';
import { yourOrder } from './your-order';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            menuItems: MenuItems,
            yourOrder
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}