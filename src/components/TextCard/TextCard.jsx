import { useState } from "react";
import s from "./style.module.css";
import { Trash } from "react-bootstrap-icons";

export default function TextCard({
  title,
  content,
  subtitle,
  onClick,
  onClickTrash,
}) {
  const [isCardHover, setIsCardHover] = useState(false);
  const [isTrashHover, setIsTrashHover] = useState(false);

  const onClickTrash_ = (e) => {
    onClickTrash();
    e.stopPropagation();
  };

  const handleClick = (e) => {
    onClick();
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleClick}
      className={`card ${s.container}`}
      style={{ borderColor: isCardHover ? "#0d6efd" : "transparent" }}
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
          <Trash
            size={20}
            onClick={onClickTrash_}
            onMouseEnter={() => setIsTrashHover(true)}
            onMouseLeave={() => setIsTrashHover(false)}
            style={{ color: isTrashHover ? "#FF7373" : "#b8b8b8" }}
          />
        </div>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
}
