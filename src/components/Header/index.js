import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/11222413?v=4" alt="User" />
      <span>Moisés Hilario</span>
    </User>
  </Container>
);

export default Header;
