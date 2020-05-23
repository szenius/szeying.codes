import React, {useState, useContext} from 'react';
import {COLOR_THEMES} from './themes';
import {setColorTheme} from '../../context/actions';
import {Context} from '../../context/ContextProvider';

export const ColorThemeToggle = () => {
  const [showDropdown, setShowDrawer] = useState(false);

  const {state, dispatch} = useContext(Context);
  const changeColorTheme = (newColorTheme) => dispatch(setColorTheme(newColorTheme));

  return (
    <>
      <ColorThemeToggleButton text={state.colorTheme} onClick={() => setShowDrawer(!showDropdown)} />
      {showDropdown && <ColorThemeToggleDrawer setColorTheme={changeColorTheme} />}
    </>
  );
};

const ColorThemeToggleDrawer = ({setColorTheme}) => (
  <>
    {Object.values(COLOR_THEMES).map((color) => (
      <ColorThemeToggleButton text={color} onClick={() => setColorTheme(color)} />
    ))}
  </>
);

const ColorThemeToggleButton = ({text, onClick}) => <button onClick={onClick}>{text}</button>;
