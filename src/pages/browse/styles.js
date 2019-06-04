import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 48px;
  color: #fff;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;
  color: #fff;

  &:first-child {
    margin: 0;
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
