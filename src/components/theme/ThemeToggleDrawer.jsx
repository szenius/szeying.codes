import React, {useContext} from 'react';
import {COLOR_THEMES} from './themes';
import {setColorTheme} from '../../context/actions';
import {Context} from '../../context/ContextProvider';
import {ThemeToggleButton} from './ThemeToggleButton';

export const ThemeToggleDrawer = ({closeDrawer}) => {
  const {state, dispatch} = useContext(Context);
  const changeColorTheme = (newColorTheme) => dispatch(setColorTheme(newColorTheme));

  return (
    <div class="toggle-drawer">
      {Object.values(COLOR_THEMES).map(
        (color) =>
          color !== state.colorTheme && (
            <ThemeToggleButton
              color={color}
              isSelected={false}
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
