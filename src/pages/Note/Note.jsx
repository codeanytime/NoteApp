import NoteForm from "components/NoteForm/NoteForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { noteSlice } from "../../store/notes/notes-slice";
import { useState } from "react";
import { NoteAPI } from "api/note-api";
import { useDispatch } from "react-redux";
import { updateNote, deleteNote } from "../../store/notes/notes-slice";
import { useNavigate } from "react-router";

export function Note(props) {
  const { noteId } = useParams();
  const navigate = useNavigate();
  console.log(noteId);
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );

  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.update({ ...formValues, id: note.id });
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  };

  const deleteNote_ = async (note) => {
    NoteAPI.deleteById(note.id);
    dispatch(deleteNote(note));
    navigate("/");
  };
  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickDelete={() => deleteNote_(note)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
