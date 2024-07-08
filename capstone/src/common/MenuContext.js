import React, { createContext, useContext, useEffect, useState } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(
    () => localStorage.getItem('menu') || 'hidden'
  );

  useEffect(() => {
    localStorage.setItem('menu', menu);
  }, [menu]);

  const toggleMenu = () => {
    setMenu((prevMenu) => (prevMenu === 'hidden' ? 'visible' : 'hidden'));
  };

  return (
    <MenuContext.Provider value={{ menu, toggleMenu}}>
      {children}
    </MenuContext.Provider>
  )
};