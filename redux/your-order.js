import * as ActionTypes from './ActionTypes';



export const yourOrder = (state = {order: []}, action) => {
    switch (action.type){
        case ActionTypes.ADD_ITEM:
            return {...state, order: action.payload} 
    
        default: return state
    }
        
}