import React, { FC, Children, useCallback, useEffect } from 'react'
import useMousetrap from 'react-hook-mousetrap'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { BLOCK_COORDS, INDEX } from '../../typings'
import { createGrid, selectBlock } from '../../redux/actions'
import { IReducer } from '../../redux/reducers'

import Block from '../block/Block.component'
import { Container, Row } from './Grid.styles'

interface IState {
    selectedBlock?: BLOCK_COORDS;
}

const Grid: FC = () => { 
    const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({ selectedBlock }))
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const create = useCallback(() => dispatch(createGrid()), [dispatch])

    useEffect(() => {
        create()
    }, [create])

    const moveDown = () => {
        if(state.selectedBlock && state.selectedBlock[0] < 8) {
            dispatch(
                selectBlock([
                    (state.selectedBlock[0] + 1) as INDEX,
                    state.selectedBlock[1]
                ])
            )
        }
    }

    const moveLeft = () => {
        if(state.selectedBlock && state.selectedBlock[1] > 0) {
            dispatch(
                selectBlock([
                    state.selectedBlock[0],
                    (state.selectedBlock[1] - 1) as INDEX
                ])
            )
        }
    }

    const moveRight = () => {
        if(state.selectedBlock && state.selectedBlock[1] < 8) {
            dispatch(
                selectBlock([
                    state.selectedBlock[0],
                    (state.selectedBlock[1] + 1) as INDEX
                ])
            )
        }
    }

    const moveUp = () => {
        if(state.selectedBlock && state.selectedBlock[0] > 0) {
            dispatch(
                selectBlock([
                    (state.selectedBlock[0] - 1) as INDEX,
                    state.selectedBlock[1]
                ])
            )
        }
    }

    useMousetrap('down', moveDown);
    useMousetrap('left', moveLeft);
    useMousetrap('right', moveRight);
    useMousetrap('up', moveUp)

    return (
        <Container data-cy="grid-container">
            {Children.toArray([...Array(9)].map((_, rowIndex) => (
                <Row data-cy="grid-row-container">
                    {Children.toArray([...Array(9)].map((_, colIndex) => (
                        <Block 
                            rowIndex={rowIndex as INDEX} 
                            colIndex={colIndex as INDEX} 
                        />
                    )))}
                </Row>
            )))}
        </Container>
    )
}

export default Grid;