import { Logo } from "../logo/index";
import logo from "assets/images/logo.png";
import s from "./style.module.css";
import { ButtonPrimary } from "components/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";

export function Header(props) {
  const navigate = useNavigate();

  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          title="Notomatic"
          subtitle={"Manage your note"}
          image={logo}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary
          onClick={() => {
            navigate("/note/new");
          }}
        >
          Add your note+
        </ButtonPrimary>
      </div>
    </div>
  );
}
