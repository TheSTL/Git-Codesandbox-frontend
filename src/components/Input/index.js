import React from "react";
import style from "./index.module.scss";

function Input({ placeholder, value, onChange, name, onFocus, onBlur }) {
  return (
    <input
      type="text"
      name={name}
      className={style.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete="off"
    />
  );
}

export default Input;
