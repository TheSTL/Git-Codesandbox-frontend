import cn from "classnames";
import style from "./index.module.scss";

function Button({ text, variant }) {
  const btnColorClass = `button-${variant || "blue"}`;
  return (
    <button className={cn(style.button, style[btnColorClass])}> {text} </button>
  );
}

export default Button;
