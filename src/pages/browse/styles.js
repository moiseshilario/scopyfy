import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 48px;
  color: #fff;

  ${Spinner} {
    height: 24px;
    margin-left: 10px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow: auto;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 250px;
  text-decoration: none;
  color: #fff;

  &:last-child {
    margin-right: 0;
  }

  &:hover img {
    opacity: 0.6;
  }

  img {
    transition: opacity 0.2s ease;
    height: 250px;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
`;
