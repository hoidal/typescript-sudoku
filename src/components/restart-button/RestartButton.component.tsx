import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { ButtonWrapper } from '../presentational-components';
import { createGrid } from '../../redux/actions';

const RestartButton: FC = () => {
    const dispatch = useDispatch<Dispatch<Action>>();

    const createNewGrid = useCallback(() => {
        if(window.confirm('Are you sure you want to start a new game?')) {
            dispatch(createGrid());
        }
    }, [dispatch])
    return <ButtonWrapper onClick={createNewGrid}>NEW GAME</ButtonWrapper>
}

export default RestartButton;