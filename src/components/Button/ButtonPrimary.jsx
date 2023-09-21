import s from "./style.module.css";

export function ButtonPrimary({ children, isDisabled, onClick }) {
  return (
    <button
      disabled={isDisabled}
      type="button"
      onClick={onClick}
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
}
