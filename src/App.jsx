import React from 'react';
import './global.css';
import {Profile} from './components/profile/Profile';
import {ColorToggle} from './components/toggle/ColorToggle';

function App() {
  return (
    <div className="App">
      <Profile />
      <ColorToggle />
    </div>
  );
}

export default App;
