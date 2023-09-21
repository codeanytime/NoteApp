import { SearchBar } from "components/SearchBar/SearchBar";
import { NoteList } from "pages/NoteList/NoteList";
import { useSelector } from "react-redux";
import { useState } from "react";

export function NoteBrowse(props) {
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const [textSearch, setTextSearch] = useState("");

  const filterList = noteList.filter(
    (note) =>
      note.title
        .trim()
        .toUpperCase()
        .includes(textSearch.trim().toUpperCase()) ||
      note.content
        .trim()
        .toUpperCase()
        .includes(textSearch.trim().toUpperCase())
  );

  return (
    <>
      <SearchBar onSearch={setTextSearch} />
      <NoteList noteList={filterList} />
    </>
  );
}
