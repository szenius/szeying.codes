import React, {useState, useContext} from 'react';
import {COLOR_THEMES} from './themes';
import {setColorTheme} from '../../context/actions';
import {Context} from '../../context/ContextProvider';
import './theme.css';
export const ColorThemeToggle = () => {
  const [showDropdown, setShowDrawer] = useState(false);
  const {state} = useContext(Context);

  return (
    <div class={`color-theme-toggle color-theme-toggle${showDropdown ? '--selected' : ''}`}>
      {showDropdown && <ColorThemeToggleDrawer closeDrawer={() => setShowDrawer(false)} />}
      <ColorThemeToggleButton color={state.colorTheme} onClick={() => setShowDrawer(!showDropdown)} />
    </div>
  );
};

const ColorThemeToggleDrawer = ({closeDrawer}) => {
  const {state, dispatch} = useContext(Context);
  const changeColorTheme = (newColorTheme) => dispatch(setColorTheme(newColorTheme));

  return (
    <div class="color-theme-toggle-drawer">
      {Object.values(COLOR_THEMES).map(
        (color) =>
          color !== state.colorTheme && (
            <ColorThemeToggleButton
              color={color}
              onClick={() => {
                changeColorTheme(color);
                closeDrawer();
              }}
            />
          ),
      )}
    </div>
  );
};

const ColorThemeToggleButton = ({color, onClick}) => (
  <button className={`color-theme-toggle__button color-theme-toggle__button--${color}`} onClick={onClick} />
);
