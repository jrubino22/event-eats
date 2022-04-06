import * as ActionTypes from './ActionTypes';


export const addMenuItem = (menuItemId, option1, option2) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        menuItemId: menuItemId,
        option1: option1,
        option2: option2
    }
})

export const removeMenuItem = (menuItemId, option1, option2) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        menuItemId: menuItemId
    }
})