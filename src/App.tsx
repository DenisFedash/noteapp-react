import { AddNoteForm } from "./components/AddNoteForm";
import { NotesTable } from "./components/NotesTabel";

function App() {
  return (
    <div className="container">
      <AddNoteForm />
      <NotesTable />
    </div>
  );
}

export default App;
