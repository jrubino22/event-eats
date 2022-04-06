import * as ActionTypes from './ActionTypes';



export const yourOrder = (state = {order: []}, action) => {
    switch (action.type){
        case ActionTypes.ADD_ITEM:
            return {...state, order: action.payload} 
        case ActionTypes.REMOVE_ITEM:
            return []
        default: return state
    }       
}