import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/noteSlice";
import { findDates } from "../utils/findDates";

export const AddNoteForm: React.FC = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("Task");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (content.trim() === "") {
      alert("Please enter note content.");
      return;
    }

    const newNote = {
      id: Date.now(),
      time: new Date().toLocaleString(),
      content,
      category,
      datesMentioned: findDates(content),
      archived: false,
    };

    dispatch(addNote(newNote));
    setContent("");
  };

  return (
    <div>
      <label>Note Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Task">Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>
      </select>
      <label>Note Content:</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};
