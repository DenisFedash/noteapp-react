import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Note } from "./Note";

export const NotesTable: FC = () => {
  const notes = useSelector((state: RootState) => state.notes);
  const getCategoryCount = (category: string, archived: boolean) => {
    return notes.filter(
      (note) => note.category === category && note.archived === archived
    ).length;
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Time of Creation</th>
            <th>Note Content</th>
            <th>Note Category</th>
            <th>Dates Mentioned</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(
            ({ id, time, content, category, datesMentioned, archived }) => (
              <Note
                key={id}
                id={id}
                time={time}
                content={content}
                category={category}
                datesMentioned={datesMentioned}
                archived={archived}
              />
            )
          )}
        </tbody>
      </table>
      <h2>Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Active</th>
            <th>Archived</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task</td>
            <td>{getCategoryCount("Task", false)}</td>
            <td>{getCategoryCount("Task", true)}</td>
          </tr>
          <tr>
            <td>Random Thought</td>
            <td>{getCategoryCount("Random Thought", false)}</td>
            <td>{getCategoryCount("Random Thought", true)}</td>
          </tr>
          <tr>
            <td>Idea</td>
            <td>{getCategoryCount("Idea", false)}</td>
            <td>{getCategoryCount("Idea", true)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
