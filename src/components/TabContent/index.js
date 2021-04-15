import DeployConfig from "../DeployConfig";
import Preview from "../Preview";

import style from "./index.module.scss";

function TabContent({ id, setTabs }) {
  return (
    <div className={style.tabContent}>
      <DeployConfig id={id} setTabs={setTabs} />
      <Preview />
    </div>
  );
}

export default TabContent;
