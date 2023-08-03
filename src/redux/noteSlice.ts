import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { findDates } from '../utils/findDates';
import { initialNotes } from '../data/data';
import { NoteProps } from '../interfaces/prop.interface';

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialNotes,
  reducers: {
    addNote: (state, action: PayloadAction<NoteProps>) => {
      state.push(action.payload);
    },
    editNote: (state, action: PayloadAction<{ id: number; content: string }>) => {
      const { id, content } = action.payload;
      const note = state.find((n) => n.id === id);
      if (note) {
        note.content = content;
        note.datesMentioned = findDates(content);
      }
    },
    archiveNote: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((note) => note.id === action.payload);
      if (index !== -1) {
        state[index].archived = true;
      }
    },
    unarchiveNote: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((note) => note.id === action.payload);
      if (index !== -1) {
        state[index].archived = false;
      }
         },
    deleteNote: (state, action: PayloadAction<number>) => {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});



export const { addNote, editNote, archiveNote, unarchiveNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;