import React, {useState} from 'react';

const COLORS = {
  PINK: 'pink',
  BLACK: 'black',
  YELLOW: 'yellow',
};

export const ColorToggle = () => {
  const [showDropdown, setShowDrawer] = useState(false);
  const [chosenColor, setChosenColor] = useState(COLORS.PINK);

  return (
    <>
      <button onClick={() => setShowDrawer(!showDropdown)}>{chosenColor}</button>
      {showDropdown && <ColorToggleDrawer setChosenColor={setChosenColor} />}
    </>
  );
};

const ColorToggleDrawer = ({setChosenColor}) => (
  <>
    {Object.values(COLORS).map((color) => (
      <ColorToggleButton color={color} setChosenColor={setChosenColor} />
    ))}
  </>
);

const ColorToggleButton = ({color, setChosenColor}) => (
  <button onClick={() => setChosenColor(color)}>{color}</button>
);
