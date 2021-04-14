import DeployConfig from "../DeployConfig";
import Preview from "../Preview";

import style from "./index.module.scss";

function TabContent() {
  return (
    <div className={style.tabContent}>
      <DeployConfig />
      <Preview />
    </div>
  );
}

export default TabContent;
