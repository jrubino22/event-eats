import {createStore, combineReducers} from 'redux';
import { MENU_ITEMS } from "../shared/menu-items";


export const initialState = {
    menuItems: MENU_ITEMS
}

export const Reducer = (state = initialState, action) => {
    return state;
}