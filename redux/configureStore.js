import {createStore, combineReducers} from 'redux';
import {MenuItems} from './menu-items';
import { yourOrder } from './your-order';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            menuItems: MenuItems,
            yourOrder
        })
    );
    return store;
}