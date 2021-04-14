import { useContext, useCallback } from "react";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import { GithubDataContext } from "../../context";
import { cloneUrl, importToSandbox } from "../../constants/url";
import style from "./index.module.scss";

function DeployConfig() {
  const { githubData, setGithubData } = useContext(GithubDataContext);
  const onChange = useCallback(
    (e) => {
      setGithubData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },
    [setGithubData]
  );
  const onClickDeploy = async () => {
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
  };

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
      <Input
        name="branch"
        placeholder="Insert Branch Name"
        value={githubData.branch}
        onChange={onChange}
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
