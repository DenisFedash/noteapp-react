import "./App.css";
import { AddNoteForm } from "./components/AddNoteForm";
import { NotesTable } from "./components/NotesTabel";

function App() {
  return (
    <div>
      <AddNoteForm />
      <NotesTable />
    </div>
  );
}

export default App;
