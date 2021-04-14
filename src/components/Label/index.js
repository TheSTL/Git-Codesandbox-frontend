import style from './index.module.scss';

function Label({ text }) {
  return <label className={style.label}>{text}</label>;
}

export default Label;
