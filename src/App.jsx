import { NoteAPI } from "api/note-api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/notes/notes-slice";
import { Header } from "./components/Header/Header";
import s from "./style.module.css";

export function App() {
  const dispatch = useDispatch();
  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className={s.workspace}>
          <Outlet />
        </div>
      </div>
    </>
  );
}