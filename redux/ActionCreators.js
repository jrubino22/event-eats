import * as ActionTypes from './ActionTypes';

const addMenuItem = (menuItemId, option1, option2) => ({
    type: ActionTypes.ADD,
    payload: {
        menuItemId: menuItemId,
        option1: option1,
        option2: option2
    }
})