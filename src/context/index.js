import React, { useState, createContext, useContext } from "react";
import { githubContextIntialValue } from "../constants";

export const GithubDataContext = createContext({});

export const useGithubDataContext = () => useContext(GithubDataContext);

export const GithubDataContextProvider = ({ children }) => {
  const [githubData, setGithubData] = useState(githubContextIntialValue);
  return (
    <GithubDataContext.Provider value={{ githubData, setGithubData }}>
      {children}
    </GithubDataContext.Provider>
  );
};
