import React, {useContext} from 'react';
import {Context} from '../../context/ContextProvider';

export const ProfileLink = ({url, text}) => {
  const {state} = useContext(Context);
  const colorTheme = state.colorTheme;

  return (
    <a
      href={url}
      class={`profile-link profile-link__${colorTheme}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  );
};
