import React, {useContext} from 'react';
import {Profile} from './components/profile/Profile';
import {ThemeToggle} from './components/theme/ThemeToggle';
import {Context} from './context/ContextProvider';
import './global.css';

function App() {
  const {state} = useContext(Context);
  return (
    <div className={`App ${state.colorTheme}-bg`}>
      <Profile />
      <ThemeToggle />
    </div>
  );
}

export default App;
