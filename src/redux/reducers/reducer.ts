import { AnyAction } from 'redux';
import { IReducer } from '../interfaces';
import { compareArrays } from '../../utils';
import { GRID } from '../../typings';

import { CREATE_GRID, FILL_BLOCK, SELECT_BLOCK } from '../constants';

const initialState: IReducer = {};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_GRID:
      return {
        ...state,
        challengeGrid: action.payload.challengeGrid,
        solvedGrid: action.payload.solvedGrid,
        workingGrid: action.payload.workingGrid,
      };
    case FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        const { coords, value } = action.payload;
        if (state.solvedGrid[coords[0]][coords[1]] !== value) {
          alert('Incorrect Number!');
          return state;
        }
        state.workingGrid[coords[0]][coords[1]] = value;
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert('Completed!');
        }
        return {
          ...state,
          workingGrid: [...state.workingGrid] as GRID,
        };
      }
      return state;
    }
    case SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
