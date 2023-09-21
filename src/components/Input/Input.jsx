import s from "./style.module.css";

const CustomInput = ({ children }) => {
  return <input className={s.input}>{children}</input>;
};

export default CustomInput;
