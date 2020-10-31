import styled, { css } from 'styled-components'

export const Title = styled.h1`
    ${({theme}) => css`
        color: ${theme.colors.white};
        margin-top: 0;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Permanent Marker', cursive;
        font-size: 1.5em;
        margin-bottom: 10px;
    `}
`