import { useContext, useCallback, useEffect } from "react";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import SearchInput from "../SearchInput";
import { GithubDataContext } from "../../context";
import { cloneUrl, importToSandbox } from "../../constants/url";
import style from "./index.module.scss";

function DeployConfig() {
  const { githubData, setGithubData } = useContext(GithubDataContext);
  const onChange = useCallback(
    (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setGithubData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setGithubData]
  );
  const onClickDeploy = useCallback(async () => {
    setGithubData((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    await fetch(cloneUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: githubData.url }),
    });
    fetch(importToSandbox, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: githubData.url,
        branch: githubData.branch,
        commitId: githubData.commitId,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setGithubData((prevState) => ({
          ...prevState,
          ...response,
          isLoading: false,
        }));
      });
  }, [setGithubData, githubData.url, githubData.branch, githubData.commitId]);

  useEffect(() => {
    const repoLoc = githubData.url.split("https://github.com/");
    if (repoLoc[1]) {
      fetch(`https://api.github.com/repos/${repoLoc[1]}/branches`)
        .then((response) => {
          if (!response.ok) return;
          return response.json();
        })
        .then((data) => {
          setGithubData((prevState) => ({
            ...prevState,
            branchList: data.map((branchData) => branchData.name),
          }));
        });
    }
  }, [githubData.url, setGithubData]);

  return (
    <div className={style.deployConfig}>
      <Label text="GitHub Repository URL" />
      <Input
        name="url"
        placeholder="Insert Github Url"
        value={githubData.url}
        onChange={onChange}
      />
      <Label text="Github Repository Branch Name" />

      <SearchInput
        name="branch"
        placeholder="Insert Branch Name"
        value={githubData.branch}
        onChange={onChange}
        list={githubData.branchList}
      />
      <Label text="GitHub Repository Commit Id" />
      <Input
        name="commitId"
        placeholder="Insert Commit Id"
        value={githubData.commitId}
        onChange={onChange}
      />
      <Button
        text="Deploy"
        onClick={onClickDeploy}
        isLoading={githubData.isLoading}
      />
    </div>
  );
}

export default DeployConfig;
