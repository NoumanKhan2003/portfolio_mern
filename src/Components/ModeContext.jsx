import React, { createContext, useState } from "react";

// Create Context
export const ModeContext = createContext();

// ModeProvider Component
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  // Toggle Mode Function
  const changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <ModeContext.Provider value={{ mode, changeMode }}>
      {children}
    </ModeContext.Provider>
  );
};
