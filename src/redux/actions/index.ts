import { AnyAction } from 'redux';
import { BLOCK_COORDS, NUMBERS } from '../../typings';
import { CREATE_GRID, SELECT_BLOCK, FILL_BLOCK } from '../constants';
import { createFullGrid, removeNumbers, copyGrid } from '../../utils';

export const createGrid = (): AnyAction => {
  const solvedGrid = createFullGrid();
  const gridCopy = copyGrid(solvedGrid);
  const challengeGrid = removeNumbers(gridCopy, 10);
  const workingGrid = copyGrid(challengeGrid);
  return {
    type: CREATE_GRID,
    payload: {
      challengeGrid,
      solvedGrid,
      workingGrid,
    },
  };
};

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  type: SELECT_BLOCK,
  payload: coords,
});

export const fillBlock = (value: NUMBERS, coords: BLOCK_COORDS): AnyAction => ({
  type: FILL_BLOCK,
  payload: {
    coords,
    value,
  },
});
