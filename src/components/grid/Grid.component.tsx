import React, { FC, Children, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { INDEX } from '../../typings'

import { createGrid } from '../../redux/actions'

import Block from '../block/Block.component'
import { Container, Row } from './Grid.styles'

const Grid: FC = () => { 
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const create = useCallback(() => dispatch(createGrid()), [dispatch])

    useEffect(() => {
        create()
    }, [create])

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