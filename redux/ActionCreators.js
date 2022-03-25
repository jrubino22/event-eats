import * as ActionTypes from './ActionTypes';
import { MENU_ITEMS } from "../shared/menu-items";

const addMenuItem = (MENU_ITEMS, option1, option2) => ({
    type: ActionTypes.ADD,
    menuItems: MENU_ITEMS,
    option1: option1,
    option2: option2
})