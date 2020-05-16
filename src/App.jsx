import React from 'react';
import './css/global.css';
import {Header} from './Header/Header';
import {Icon} from './Header/Icon';
import {Bio} from './Body/Bio';

function App() {
  return (
    <div className="App">
      <Header />
      <Icon />
      <Bio />
    </div>
  );
}

export default App;
