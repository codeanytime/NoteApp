import { NoteAPI } from "api/note-api";
import NoteForm from "../../components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { addNote } from "store/notes/notes-slice";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export function NoteCreate(props) {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    console.log("MESSAGE SUCCESS");
    messageApi.open({
      type: "success",
      content: "Create note success",
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (formValues) => {
    const createNote = await NoteAPI.create({
      ...formValues,
      create_at: new Date().toLocaleDateString(),
    });
    dispatch(addNote(createNote));
    success();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <>
      {contextHolder}
      <NoteForm title="New note" onSubmit={submit} />
    </>
  );
}
