"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const logInUser = (token) => {
    localStorage.setItem("token", token);
  }
  return (
    <UserContext.Provider value={{ user, setUser, logInUser }}>
      {children}
    </UserContext.Provider>
  );
};
