"use client"
import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext({});

const initialState = {
  completed:
    typeof window !== 'undefined' &&
    localStorage.getItem('completed') &&
    JSON.parse(localStorage.getItem('completed')),
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
