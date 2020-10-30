import { GRID, BLOCK_COORDS } from '../../typings'

export interface IReducer { 
    grid?: GRID;
    selectedBlock?: BLOCK_COORDS;
}