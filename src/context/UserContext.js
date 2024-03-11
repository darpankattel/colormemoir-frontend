"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [routerState, setRouterState] = useState("steady");
  const [progress, setProgress] = useState(0);

  const logInUser = (token) => {
    localStorage.setItem("token", token);
  }
  return (
    <UserContext.Provider value={{ user, setUser, logInUser, routerState, setRouterState, progress, setProgress }}>
      {children}
    </UserContext.Provider>
  );
};
