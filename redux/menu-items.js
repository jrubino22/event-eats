import { MENU_ITEMS } from "../shared/menu-items";
import * as ActionTypes from './ActionTypes'

export const menuItems = (state = {
    menuItems: [],
    option1: null,
    option2: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD:
            return {...state, option1, option2}
        default:
            return state
    }
}