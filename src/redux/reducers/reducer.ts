import { AnyAction } from 'redux';
import { IReducer } from '../interfaces'

import { CREATE_GRID, SELECT_BLOCK } from '../constants'

const initialState: IReducer = {};

const reducer = (state=initialState, action: AnyAction) => {
    switch(action.type) {
        case CREATE_GRID: 
            return {
                ...state,
                grid: action.payload
            }
        case SELECT_BLOCK: 
            return {
                ...state, 
                selectedBlock: action.payload
            }
        default:
            return state;
    }
}

export default reducer;