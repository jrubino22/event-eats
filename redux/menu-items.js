import { MENU_ITEMS } from "../shared/menu-items";
import * as ActionTypes from './ActionTypes'

export const MenuItems = (state = MENU_ITEMS, action) => {
    switch (action.type) {
        default:
            return state;
    }
}