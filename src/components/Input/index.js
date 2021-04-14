import React from "react";
import style from "./index.module.scss";

function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className={style.input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
