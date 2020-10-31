import styled, { css } from 'styled-components'

export const Title = styled.h1`
    ${({theme}) => css`
        color: ${theme.colors.white};
        margin-top: 0;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Permanent Marker', cursive;
        font-size: 3em;
        margin-bottom: 10px;
    `}
`