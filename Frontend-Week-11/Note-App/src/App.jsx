import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import './App.css'
import NoteProvider from './context/NoteProvider'

function App() {

  return (
    <NoteProvider>
      <div className="note">
      <h1>NotesApp</h1>
      <AddNote />
      <NoteList />
      </div>
    </NoteProvider>
  )
}

export default App