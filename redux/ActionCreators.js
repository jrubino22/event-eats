import * as ActionTypes from './ActionTypes';

// export const addToOrder = (menuItemId, option1, option2) => dispatch => {
//     const newOrder = {
//         menuItemId,
//         option1,
//         option2
//     }
// }

export const addMenuItem = (menuItemId, option1, option2) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        menuItemId: menuItemId,
        option1: option1,
        option2: option2
    }
})