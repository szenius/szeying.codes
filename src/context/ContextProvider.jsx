import React, {createContext, useReducer} from 'react';
import {COLOR_THEMES} from '../components/theme/themes';
import {SET_COLOR_THEME} from './actions';

const initialState = {colorTheme: COLOR_THEMES.PINK};

export const Context = createContext(initialState);

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SET_COLOR_THEME:
        return {...state, colorTheme: action.payload.colorTheme};
      default:
        return state;
    }
  }, initialState);

  return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>;
};
