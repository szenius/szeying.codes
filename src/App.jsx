import React from 'react';
import './global.css';
import {Profile} from './components/profile/Profile';
import {ColorThemeToggle} from './components/theme/ColorThemeToggle';

function App() {
  return (
    <div className="App">
      <Profile />
      <ColorThemeToggle />
    </div>
  );
}

export default App;
