import cn from "classnames";
import Icon from "../Icon";
import style from "./index.module.scss";

function Button({ text, variant, onClick, isLoading }) {
  const btnColorClass = `button-${variant || "blue"}`;
  return (
    <button
      className={cn(style.button, style[btnColorClass])}
      onClick={onClick}
    >
      {isLoading && <Icon name="loader" size={32} />}
      {text}
    </button>
  );
}

export default Button;
