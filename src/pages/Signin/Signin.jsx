import { ButtonPrimary } from "components/Button/ButtonPrimary";
import s from "./style.module.css";
import CustomInput from "../../components/Input/Input";

const Signin = () => {
  const form = (
    <>
      <div className={s.formContainer}>
        <h1>
          Sign in <br /> to access your team notes
        </h1>
        <form className={s.formGroup}>
          <CustomInput></CustomInput>
          <CustomInput></CustomInput>
          <div>
            <ButtonPrimary>Sign in!</ButtonPrimary>
          </div>
        </form>
      </div>
    </>
  );
  return <>{form}</>;
};
export default Signin;
