import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {TNoteState} from "@/../types/redux/NoteState";
import {hashTags as hashTagsReqExp} from "@/constants/reqExp/reqExp";
import {v4 as uuidv4} from "uuid";

const initialState: TNoteState = [];

export const noteSlice = createSlice({
  name: "notes",

  initialState,

  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      const hashTags = action.payload.match(hashTagsReqExp) || [];

      state.push({id: uuidv4(), text: action.payload, hashTags});
    },

    removeNote: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const noteIndex = state.findIndex((note) => note.id === id);

      state.splice(noteIndex, 1);
    },

    editNote: (state, action: PayloadAction<{id: string; text: string}>) => {
      const {id, text} = action.payload;
      const hashTags = text.match(hashTagsReqExp) || [];
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

export const {addNote, removeNote, editNote} = noteSlice.actions;

export default noteSlice.reducer;
