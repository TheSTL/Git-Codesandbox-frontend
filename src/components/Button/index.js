import React from "react";
import cn from "classnames";
import Icon from "../Icon";
import style from "./index.module.scss";

function Button({ text, color, variant, onClick, isLoading }) {
  const btnClass = `button-${variant || "solid"}-${color || "blue"}`;

  return (
    <button className={cn(style.button, style[btnClass])} onClick={onClick}>
      {isLoading && <Icon name="loader" size={32} />}
      {text}
    </button>
  );
}

export default Button;
