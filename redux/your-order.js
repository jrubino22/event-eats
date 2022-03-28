import * as ActionTypes from './ActionTypes';

export const yourOrder = (state = [], action) => {
    switch (action.type){
        case ActionTypes.ADD:
            return state.concat(action.payload)      
            
        default: return state
    }
}