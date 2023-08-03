import { FC } from "react";
import { useDispatch } from "react-redux";

import { DataProps } from "../interfaces/prop.interface";
import {
  archiveNote,
  deleteNote,
  editNote,
  unarchiveNote,
} from "../redux/noteSlice";

export const Note: FC<DataProps> = ({
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
      <td>{datesMentioned}</td>
      <td>
        {archived ? (
          <button
            className="unarchiveBtn"
            onClick={() => unarchiveNoteHandler(id)}
          >
            Unarchive
          </button>
        ) : (
          <>
            <button
              className="archiveBtn"
              onClick={() => archiveNoteHandler(id)}
            >
              Archive
            </button>
            <button
              className="editBtn"
              onClick={() => editNoteHandler(id, content)}
            >
              Edit
            </button>
            <button className="deleteBtn" onClick={() => deleteNoteHandler(id)}>
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};
