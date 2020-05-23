import React from 'react';

export const ThemeToggleButton = ({color, isSelected, onClick}) => (
  <button
    className={`color-theme-toggle__button color-theme-toggle__button--${color} ${
      isSelected ? 'color-theme-toggle__button--selected' : ''
    }`}
    aria-label={color}
    onClick={onClick}
  />
);
