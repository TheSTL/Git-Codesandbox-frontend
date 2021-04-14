import { useContext } from "react";
import Icon from "../Icon";
import { GithubDataContext } from "../../context";
import style from "./index.module.scss";

function Preview() {
  const { githubData } = useContext(GithubDataContext);

  if (githubData.isLoading) {
    return (
      <div className={style.loading}>
        <Icon name="loader" size={200} />
      </div>
    );
  }
  if (!githubData.embedUrl) return <div className={style.hiddenIframe}></div>;

  return (
    <iframe
      src={githubData.embedUrl}
      title="codesandbox-preview"
      className={style.iframe}
    />
  );
}

export default Preview;
