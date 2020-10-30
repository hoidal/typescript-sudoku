import React, { FC } from 'react'

import { Container } from './styles'

interface IProps {
    rowIndex: number
    columnIndex: number 
}

const Block: FC<IProps> = ({ rowIndex, columnIndex }) => {
    return (
        <Container data-cy={`block-${rowIndex}-${columnIndex}`}></Container>
    )
}

export default Block