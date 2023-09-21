import React, { useState } from "react";
import s from "./style.module.css";
import TextCard from "../../components/TextCard/TextCard";
import { deleteNote } from "../../store/notes/notes-slice";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "components/Modal/ConfirmModal";
import { NoteAPI } from "api/note-api";
import { useDispatch } from "react-redux";

export function NoteList({ noteList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [removeNote, setRemoveNote] = useState(null);

  const handleClickTrash = (note) => {
    setShowModal(true);
    setRemoveNote(note);
  };

  const onClickConfirm = () => {
    NoteAPI.deleteById(removeNote.id);
    dispatch(deleteNote(removeNote));
    setShowModal(false);
  };

  const onClickCancel = () => {
    setShowModal(false);
  };

  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
          <div key={note.id} className={s.card_container}>
            <TextCard
              title={note.title}
              content={note.content}
              subtitle={note.create_at}
              onClick={() => navigate("note/" + note.id)}
              onClickTrash={() => handleClickTrash(note)}
            />
          </div>
        );
      })}
      {showModal && (
        <ConfirmModal
          openModal={showModal}
          onClickConfirm={onClickConfirm}
          onClickCancel={onClickCancel}
        />
      )}
    </div>
  );
}
