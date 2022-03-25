import {createStore, combineReducers} from 'redux';
import {MenuItems} from './menu-items';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            menuItems: MenuItems
        })
    );
    return store;
}