import { ButtonPrimary } from "components/Button/ButtonPrimary";
import React from "react";
import { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import { ValidatorService } from "../../services/Validator";
import { FieldError } from "components/FieldError/FieldError";
import { Popconfirm } from "antd";

const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 10);
  },
  content: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 200);
  },
};

const NoteForm = ({
  isEditable = true,
  note,
  title,
  onClickEdit,
  onClickDelete,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState({
    title: note?.title || "",
    content: note?.content || "",
  });
  const [formError, setFormError] = useState({
    title: note?.title ? undefined : true,
    content: note?.content ? undefined : true,
  });

  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
    validate(name, value);
  };

  const validate = (fieldName, fieldValue) => {
    setFormError({
      ...formError,
      [fieldName]: VALIDATOR[fieldName](fieldValue),
    });
  };

  const hasErrors = () => {
    for (const fieldName in formError) {
      if (formError[fieldName]) {
        return true;
      }
    }
    return false;
  };
  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon} />}
      </div>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={onClickDelete}
        okText="Yes"
        cancelText="No"
      >
        <div className="col-1">
          {onClickDelete && <TrashFill className={s.icon} />}
        </div>
      </Popconfirm>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
        value={formValues.title}
      />
      <FieldError msg={formError.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        value={formValues.content}
        row="5"
      />
      <FieldError msg={formError.content} />
    </div>
  );
  console.log(formValues);

  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary
        isDisabled={hasErrors()}
        onClick={() => onSubmit(formValues)}
      >
        Submit
      </ButtonPrimary>
    </div>
  );

  return (
    <>
      <div className={s.container}>
        <div className="row justify-content-space-between">
          <div className="col-10">
            <h2 className="mb-3">{title}</h2>
          </div>
          {actionIcons}
        </div>
        <div className={`mb-3 ${s.title_input_container}`}>
          {isEditable && titleInput}
        </div>
        <div className="mb-3">
          {isEditable ? contentInput : <pre>{note.content}</pre>}
        </div>
        {onSubmit && submitBtn}
      </div>
    </>
  );
};

export default NoteForm;
