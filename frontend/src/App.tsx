import React from 'react';

import Header from './components/header/header';
import Main from './components/main/main';

import './styles/index.scss'

function App() {
  return (
    <div className="container">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
