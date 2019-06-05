import styled from 'styled-components';

import { Spinner } from '../Loading/styles';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px;
    overflow: auto;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child {
    margin-top: 0;
  }

  li {
    display: flex;
    align-items: center;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      font-weight: bold;
      line-height: ${({ main }) => (main ? '40px' : '32px')};
      transition: color 0.2s ease;

      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
    }

    ${Spinner} {
      height: 15px;
      margin-left: 10px;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  transition: opacity 0.2s ease;
  opacity: 0.8;

  &:hover {
    color: #fff;
    opacity: 1;
  }

  img {
    margin-right: 10px;
  }
`;
