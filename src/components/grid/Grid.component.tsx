import React, { FC, Children } from 'react'

import { fillGrid } from '../../utils'
import { GRID } from '../../typings'

import Block from '../block/Block.component'
import { Container, Row } from './Grid.styles'

const Grid: FC = () => {

    const grid: GRID = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    fillGrid(grid);
    console.log(grid)
     
    return (
        <Container data-cy="grid-container">
            {Children.toArray([...Array(9)].map((_, rowIndex) => (
                <Row data-cy="grid-row-container">
                    {Children.toArray([...Array(9)].map((_, colIndex) => (
                        <Block rowIndex={rowIndex} colIndex={colIndex} />
                    )))}
                </Row>
            )))}
        </Container>
    )
}

export default Grid;