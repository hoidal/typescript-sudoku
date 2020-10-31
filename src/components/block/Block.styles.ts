import styled, { css } from 'styled-components';

interface IProps {
  active?: boolean;
  puzzle?: boolean;
}

export const Container = styled.div<IProps>`
  ${({ active, theme, puzzle }) => css`
    align-items: center;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: ${puzzle? 'Pangolin, cursive': 'Rock Salt, cursive'};
    font-size: 22px;
    color: ${puzzle ? 'black' : 'gray'};
    font-weight: bold;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`;
