import { SQUARE } from '../../../typings';

import isInSquare from './';

describe('isInSquare', () => {
  it('returns true when value is in grad square', () => {
    const square: SQUARE = [
      [1, 3, 4],
      [8, 2, 7],
      [6, 9, 5],
    ];
    expect(isInSquare({ square, value: 1 })).toBeTruthy();
    expect(isInSquare({ square, value: 9 })).toBeTruthy();
    expect(isInSquare({ square, value: 4 })).toBeTruthy();
  });

  it('returns false when value is not in grad square', () => {
    const square: SQUARE = [
      [0, 3, 0],
      [8, 2, 7],
      [6, 0, 5],
    ];
    expect(isInSquare({ square, value: 1 })).toBeFalsy();
    expect(isInSquare({ square, value: 9 })).toBeFalsy();
    expect(isInSquare({ square, value: 4 })).toBeFalsy();
  });
});
