import { useState } from "react";
import Input from "../Input";
import Label from "../Label";
import style from "./index.module.scss";

function DeployConfig() {
  const [url, setUrl] = useState("");
  const [branch, setbranch] = useState("");
  const [commitId, setcommitId] = useState("");

  return (
    <div className={style.deployConfig}>
      <Label text="GitHub Repository URL" />
      <Input placeholder="Insert Github Url" value={url} onChange={setUrl} />
      <Label text="Github Repository Branch Name" />
      <Input
        placeholder="Insert Branch Name"
        value={branch}
        onChange={setbranch}
      />
      <Label text="GitHub Repository Commit Id" />
      <Input
        placeholder="Insert Commit Id"
        value={commitId}
        onChange={setcommitId}
      />
    </div>
  );
}

export default DeployConfig;
