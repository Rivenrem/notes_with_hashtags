import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {TNoteState} from "@/../types/redux/NoteState";
import {v4 as uuidv4} from "uuid";
import findHashTags from "@/helpers/findHashTags";

const initialState: TNoteState = [];

export const noteSlice = createSlice({
  name: "notes",

  initialState,

  reducers: {
    setNotes: (state, action: PayloadAction<TNoteState>) => {
      state.push(...action.payload);
    },

    addNote: (state, action: PayloadAction<string>) => {
      const hashTags = findHashTags(action.payload);

      state.push({id: uuidv4(), text: action.payload, hashTags});
    },

    removeNote: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const noteIndex = state.findIndex((note) => note.id === id);

      state.splice(noteIndex, 1);
    },

    editNote: (state, action: PayloadAction<{id: string; text: string}>) => {
      const {id, text} = action.payload;
      const hashTags = findHashTags(text);
      const noteIndex = state.findIndex((note) => note.id === id);

      state[noteIndex] = {
        ...state[noteIndex],
        id,
        text,
        hashTags,
      };
    },
  },
});

export const {setNotes, addNote, removeNote, editNote} = noteSlice.actions;

export default noteSlice.reducer;
