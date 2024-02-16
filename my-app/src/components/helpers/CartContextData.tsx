import React, { createContext, useReducer, ReactNode, useState } from "react";

interface CartItem {
  price: number;
  title: ReactNode;
  id: string | number;
  quantity: number;
  name:string;
}

interface CartContextProps {
  items: CartItem[];
  userInput: string;
  addItem: (item: CartItem) => void;
  removeItem: (id: string | number) => void;
}


interface CartProviderProps {
  children: ReactNode;
}

type CartAction =
  | { type: "add_item"; item: CartItem;}
  | { type: "remove_item"; id: string | number };

const cartReducer = (state: { items: CartItem[] }, action: CartAction) => {
  if (action.type === "add_item") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "remove_item") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
    updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
    updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {...state, items:updatedItems}
  }
 
  return state;
};

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

const CartContextDataProvider: React.FC<CartProviderProps> = ({ children }) => {

  const [userInput, setUserInput] = useState('');
  const [cart, cartActions] = useReducer(cartReducer, { items: [] });

  const addItem = (item: CartItem) => {
    cartActions({ type: "add_item", item });
  };

  const removeItem = (id: string | number) => {
    cartActions({ type: "remove_item", id });
  };

  const contextValue: CartContextProps = {
    items: cart.items,
    userInput:userInput,
    addItem,
    removeItem,

  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextDataProvider;
