import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/noteSlice";

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
      datesMentioned: new Date().toLocaleDateString(),
      archived: false,
    };

    dispatch(addNote(newNote));
    setContent("");
  };

  return (
    <div className="input-section">
      <label className="input-name">Note Category:</label>
      <select
        className="input-form"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Task">Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>
      </select>
      <label className="input-name">Note Content:</label>
      <input
        className="input-form"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};
