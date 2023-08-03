import { FC } from "react";
import { useDispatch } from "react-redux";

import { NoteProps } from "../interfaces/prop.interface";
import {
  archiveNote,
  deleteNote,
  editNote,
  unarchiveNote,
} from "../redux/noteSlice";

export const Note: FC<NoteProps> = ({
  id,
  time,
  content,
  category,
  datesMentioned,
  archived,
}) => {
  const dispatch = useDispatch();

  const archiveNoteHandler = (id: number) => {
    dispatch(archiveNote(id));
  };

  const unarchiveNoteHandler = (id: number) => {
    dispatch(unarchiveNote(id));
  };

  const deleteNoteHandler = (id: number) => {
    dispatch(deleteNote(id));
  };

  const editNoteHandler = (id: number, content: string) => {
    const newContent = prompt("Edit note:", content);
    if (newContent !== null) {
      dispatch(editNote({ id, content: newContent }));
    }
  };

  return (
    <tr>
      <td>{time}</td>
      <td>{content}</td>
      <td>{category}</td>
      <td>{datesMentioned.join(", ")}</td>
      <td>
        {archived ? (
          <button onClick={() => unarchiveNoteHandler(id)}>Unarchive</button>
        ) : (
          <>
            <button onClick={() => archiveNoteHandler(id)}>Archive</button>
            <button onClick={() => editNoteHandler(id, content)}>Edit</button>
            <button onClick={() => deleteNoteHandler(id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};
