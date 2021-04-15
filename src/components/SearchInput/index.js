import { useCallback, useMemo, useState } from "react";
import Input from "../Input";
import style from "./index.module.scss";

function SearchInput({ name, placeholder, value, onChange, list }) {
  const [isFocusd, setIsFocused] = useState(false);
  const onClickItem = useCallback(
    (e) => {
      const value = e.target.dataset.value;
      onChange({
        target: {
          name,
          value,
        },
      });
    },
    [name, onChange]
  );
  const onFocusInput = useCallback(() => {
    setIsFocused(true);
  }, []);
  const onBlurInput = useCallback(() => {
    setTimeout(() => setIsFocused(false), 500);
  }, []);

  const suggestions = useMemo(
    () =>
      list
        .filter(
          (e) =>
            e.value.toLowerCase().includes(value.toLowerCase()) &&
            e.value.toLowerCase() !== value.toLowerCase()
        )
        .slice(0, 5),
    [value, list]
  );

  return (
    <div className={style.searchInput}>
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />
      <ul
        className={
          style[isFocusd && suggestions.length ? "popup-open" : "popup-closed"]
        }
        onClick={onClickItem}
      >
        {isFocusd &&
          suggestions.map((item) => (
            <li key={item.value} data-value={item.value}>
              {item.key}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SearchInput;
