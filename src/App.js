import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Sidebar />
    </Fragment>
  );
}
