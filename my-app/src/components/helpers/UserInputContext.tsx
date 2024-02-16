
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserInputContext {
  userInput: string;
  showCart: () => void;
  hideCart: () => void;
  showCheckout: () => void;
  hideCheckout: () => void;
}

export const UserContext = createContext<UserInputContext | undefined>(undefined);

interface InputProvider {
  children: ReactNode;
}

const UserContextProvider: React.FC<InputProvider> = ({ children }) => {
  const [userProgress, setUserInput] = useState('');

  const showCart = () => {
    setUserInput('cart');
  };

  const hideCart = () => {
    setUserInput('');
  };

  const showCheckout = () => {
    setUserInput('checkout');
  };

  const hideCheckout = () => {
    setUserInput('');
  };

  const contextValue: UserInputContext = {
    userInput:userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,

  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;