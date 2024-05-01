import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <ScrollContext.Provider value={refs}>{children}</ScrollContext.Provider>
  );
};
