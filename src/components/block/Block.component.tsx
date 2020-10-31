import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { IReducer } from '../../redux/reducers'
import { selectBlock } from '../../redux/actions'
import { N, INDEX } from '../../typings'

import { Container } from './Block.styles'

interface IProps {
    rowIndex: INDEX;
    colIndex: INDEX;
}

interface IState {
    isActive: boolean;
    value: N;
}

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
    const state = useSelector<IReducer, IState>(({ workingGrid, selectedBlock }) => ({ 
        isActive: selectedBlock 
            ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex 
            : false,
        value: workingGrid ? workingGrid[rowIndex][colIndex] : 0
    }))

    const dispatch = useDispatch<Dispatch<AnyAction>>()

    const handleClick = () => {
        if(!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))
    }

    return (
        <Container 
            data-cy={`block-${rowIndex}-${colIndex}`}
            active={state.isActive}
            onClick={handleClick}
        >
            {state.value === 0 ? '' : state.value}
        </Container>
    )
}

export default Block;