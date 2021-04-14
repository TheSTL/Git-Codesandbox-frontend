import { useState, createContext } from "react";

export const GithubDataContext = createContext({});

export const GithubDataContextProvider = (props) => {
  const [githubData, setGithubData] = useState({
    commitId: "b1151f85060eb826a9eff7996b90bb8f7686d26e",
    branch: "master",
    url: "https://github.com/TheSTL/ShowGithubProfile",
    embedUrl: "https://codesandbox.io/embed/79wri",
    isLoading: false,
    branchList: [],
  });
  return (
    <GithubDataContext.Provider value={{ githubData, setGithubData }}>
      {props.children}
    </GithubDataContext.Provider>
  );
};
