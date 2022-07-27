import React, { useState, createContext, useContext } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const handleClick = (clicked) => {
  setIsClicked({ ...initialState, [clicked]: true });
};

export function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  return (
    <StateContext.Provider value={{
      activeMenu,
      setActiveMenu,
      isClicked,
      setIsClicked,
      screenSize,
      setScreenSize,
    }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);

