import React, {useState, useContext} from 'react';
import {Context} from '../../context/ContextProvider';
import {ThemeToggleDrawer} from './ThemeToggleDrawer';
import {ThemeToggleButton} from './ThemeToggleButton';
import './theme.css';

export const ThemeToggle = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const {state} = useContext(Context);

  return (
    <div class={`toggle${showDrawer ? '--selected' : ''}`}>
      {showDrawer && <ThemeToggleDrawer closeDrawer={() => setShowDrawer(false)} />}
      <ThemeToggleButton
        color={state.colorTheme}
        isSelected={!showDrawer}
        onClick={() => setShowDrawer(!showDrawer)}
      />
    </div>
  );
};
