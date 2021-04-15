import React, { useState } from "react";
import TabContent from "../TabContent";
import Icon from "../Icon";
import style from "./index.module.scss";

function Tab() {
  const [tabs, setTabs] = useState([{ id: Date.now(), name: "", show: true }]);
  return (
    <div>
      <div className={style.tabHeader}>
        {tabs.map((tab) => (
          <div className={style.items} key={tab.id}>
            <span> {tab.name} </span>
            <Icon name="close" size={18} className={style.closeIcon} />
          </div>
        ))}
        <Icon name="plus" size={18} className={style.plusIcon} onClick={() => console.log("yes")} />
      </div>
      {tabs.map((tab) => (
        <TabContent
          key={tab.id}
          id={tab.id}
          show={tab.show}
          setTabs={setTabs}
        />
      ))}
    </div>
  );
}

export default Tab;
