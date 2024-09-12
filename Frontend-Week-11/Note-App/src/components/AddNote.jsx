import { useNoteContext } from "../context/NoteProvider";
import { useEffect, useState } from "react";

function AddNote() {

  const {note, setNote, setNoteList, setSearch, selectedColor, setSelectedColor} = useNoteContext();
  const [text, setText] = useState("");
  const colors = ["pink", "purple", "yellow", "blue", "green"];

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    if (text.trim() !== "") {
      setNote({ text, color: selectedColor });
    }
  };

  useEffect(() => {
    if (note?.text) {
      setNoteList((prev) => [
        ...prev,
        { id: prev.length + 1, title: `Note ${prev.length + 1}`, color: note.color, value: note.text },
      ]);
    }
  }, [note]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleClick = (color) => setSelectedColor(color);

  return (
    <div>
      <input className="search" type="text" placeholder="Search..." onChange={handleSearch} />
      <div className="add-note">
        <textarea
          className="input-text"
          placeholder="Enter your note here..."
          value={text}
          onChange={handleChange}
        ></textarea>
        <div className="input-bottom">
          <div className="color-tag">
            {colors.map((color) => (
              <div
                key={color}
                className={color}
                onClick={() => handleClick(`var(--note-color-${color})`)}
                style={{ backgroundColor: `var(--note-color-${color})`, borderColor: selectedColor === `var(--note-color-${color})` ? "black" : "transparent" }}
              >
                <span className="material-symbols-outlined" style={{ display: selectedColor === `var(--note-color-${color})` ? 'inline' : 'none' }}>
                  check
                </span>
              </div>
            ))}
          </div>
          <button className="btn-add" onClick={handleSave}>ADD</button>
        </div>
      </div>
    </div>
  );
}

export default AddNote