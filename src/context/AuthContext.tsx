import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  isCustomer: true,
  changeRoleView: () => {}
});

export function AuthProvider({ children }) {
  const [isCustomer, setIsCustomer] = useState(true);

  const changeRoleView = () => {
    setIsCustomer(!isCustomer);
  }

  const valueContext = {
    isCustomer,
    changeRoleView
  };

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  )
}