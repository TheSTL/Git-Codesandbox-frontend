import React, { useCallback, useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import SearchInput from "../SearchInput";
import { useGithubDataContext } from "../../context";
import { cloneUrl, importToSandbox } from "../../constants/url";
import { getRepoLoc } from "../../utils";
import style from "./index.module.scss";

function DeployConfig({ id, setTabs }) {
  const [errorMessage, setErrorMessage] = useState("");
  const { githubData, setGithubData } = useGithubDataContext();
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
    setErrorMessage("");
    const repoLoc = getRepoLoc(githubData.url);
    setTabs((prev) =>
      prev.map((tab) => {
        if (tab.id === id) return { ...tab, name: repoLoc.split("/")[1] };
        return tab;
      })
    );
    if (false && repoLoc) {
      fetch(`https://api.github.com/repos/${repoLoc}/branches`)
        .then((response) => {
          if (!response.ok) {
            if (response.status === 403) {
              throw Error("API rate limit exceeded");
            }
            throw Error("The URL provided is not valid.");
          }
          return response.json();
        })
        .then((data) => {
          setGithubData((prevState) => ({
            ...prevState,
            branchList: data.map((branchData) => ({
              key: branchData.name,
              value: branchData.name,
            })),
            branch: "master",
            commitId: data.filter(
              (branchData) => branchData.name === "master"
            )[0].commit.sha,
          }));
        })
        .catch((err) => setErrorMessage(err.message));
    }
  }, [githubData.url, setGithubData, setTabs, id]);

  useEffect(() => {
    const repoLoc = getRepoLoc(githubData.url);

    if (false && repoLoc && githubData.branch) {
      fetch(
        `https://api.github.com/repos/${repoLoc}/commits?sha=${githubData.branch}`
      )
        .then((response) => {
          if (!response.ok) {
            if (response.status === 403) {
              throw Error("API rate limit exceeded");
            }
            throw Error("The Branch provided is not valid.");
          }
          return response.json();
        })
        .then((data) => {
          setGithubData((prevState) => ({
            ...prevState,
            commitList: data.map((commitItem) => ({
              key: commitItem.commit.message,
              value: commitItem.sha,
            })),
          }));
        })
        .catch((err) => setErrorMessage(err.message));
    }
  }, [githubData.url, githubData.branch, setGithubData]);

  return (
    <div className={style.deployConfig}>
      <Label text="GitHub Repository URL" />
      <Input
        name="url"
        placeholder="Insert Github Url"
        value={githubData.url}
        onChange={onChange}
      />
      <div className={style.errorMessage}>{errorMessage}</div>
      <Label text="Github Repository Branch Name" />
      <SearchInput
        name="branch"
        placeholder="Insert Branch Name"
        value={githubData.branch}
        onChange={onChange}
        list={githubData.branchList}
      />
      <Label text="GitHub Repository Commit Id" />
      <SearchInput
        name="commitId"
        placeholder="Insert Commit Id"
        value={githubData.commitId}
        onChange={onChange}
        list={githubData.commitList}
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
