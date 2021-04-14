import React from "react";
import style from "./index.module.scss";

function Input({ placeholder, value, onChange, name }) {
  return (
    <input
      type="text"
      name={name}
      className={style.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
