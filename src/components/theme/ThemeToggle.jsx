import React, {useState, useContext} from 'react';
import {Context} from '../../context/ContextProvider';
import {ThemeToggleDrawer} from './ThemeToggleDrawer';
import {ThemeToggleButton} from './ThemeToggleButton';
import './theme.css';

export const ThemeToggle = () => {
  const [showDropdown, setShowDrawer] = useState(false);
  const {state} = useContext(Context);

  return (
    <div class={`color-theme-toggle color-theme-toggle${showDropdown ? '--selected' : ''}`}>
      {showDropdown && <ThemeToggleDrawer closeDrawer={() => setShowDrawer(false)} />}
      <ThemeToggleButton
        color={state.colorTheme}
        isSelected={!showDropdown}
        onClick={() => setShowDrawer(!showDropdown)}
      />
    </div>
  );
};
