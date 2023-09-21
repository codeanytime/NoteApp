import { configureStore } from "@reduxjs/toolkit";
import { noteReducer, noteSlice } from './notes/notes-slice';

export const store = configureStore({
  reducer: {
    noteSlice: noteReducer
  },
});
