import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { ButtonWrapper } from '../presentational-components'
import { fillBlock } from '../../redux/actions'
import { IReducer } from '../../redux/reducers'
import { NUMBERS, BLOCK_COORDS, N } from '../../typings';

interface IProps {
    value: NUMBERS;
}

interface IState {
    selectedBlock?: BLOCK_COORDS;
    selectedValue: N;
}

const Button: FC<IProps> = ({ value }) => {
    const state = useSelector<IReducer, IState>(({ selectedBlock, workingGrid }) => ({
        selectedBlock,
        selectedValue: workingGrid && selectedBlock ? workingGrid[selectedBlock[0]][selectedBlock[1]] : 0
    }))
    const dispatch = useDispatch<Dispatch<AnyAction>>();

    const fill = useCallback(
        () => {
            if(state.selectedBlock && state.selectedValue === 0) {
                dispatch(fillBlock(value, state.selectedBlock));
            }
        },
        [dispatch, state.selectedBlock, state.selectedValue, value],
    )
    return (
        <ButtonWrapper onClick={fill}>{value}</ButtonWrapper>
    )
}

export default Button;