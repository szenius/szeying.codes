import React, {useContext} from 'react';
import './global.css';
import {Profile} from './components/profile/Profile';
import {ColorThemeToggle} from './components/theme/ColorThemeToggle';
import {Context} from './context/ContextProvider';

function App() {
  const {state} = useContext(Context);
  return (
    <div className={`App ${state.colorTheme}-bg`}>
      <Profile />
      <ColorThemeToggle />
    </div>
  );
}

export default App;
