import React from 'react';

export const ThemeToggleButton = ({color, isSelected, onClick}) => (
  <button
    className={`toggle__button--${color}${isSelected ? '-selected' : ''}`}
    aria-label={color}
    onClick={onClick}
  />
);
