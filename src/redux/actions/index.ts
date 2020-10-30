import { AnyAction } from 'redux'
import { BLOCK_COORDS } from '../../typings';
import { CREATE_GRID, SELECT_BLOCK } from '../constants'
import { createFullGrid } from '../../utils'



export const createGrid = (): AnyAction => ({ 
    type: CREATE_GRID,
    payload: createFullGrid()
});

export const selectedBlock = (coords: BLOCK_COORDS): AnyAction => ({
    type: SELECT_BLOCK,
    payload: coords
})