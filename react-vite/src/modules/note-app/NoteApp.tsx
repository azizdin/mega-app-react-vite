import React, { useState } from "react";

const NoteApp: React.FC = () => {
  interface Note {
    id: number;
    content: string;
    isEditing: boolean;
    originalContent: string;
  }

  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<string>("");

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(event.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() === "") return;

    const newNoteItem: Note = {
      id: Date.now(),
      content: newNote,
      isEditing: false,
      originalContent: newNote,
    };

    setNotes([...notes, newNoteItem]);
    setNewNote("");
  };

  const handleEditNote = (id: number) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isEditing: true } : note
    );
    setNotes(updatedNotes);
  };

  const handleSaveNote = (id: number) => {
    const updatedNotes = notes.map((note) =>
      note.id === id
        ? { ...note, isEditing: false, originalContent: note.content }
        : note
    );
    setNotes(updatedNotes);
  };

  const handleCancelEdit = (id: number) => {
    const updatedNotes = notes.map((note) =>
      note.id === id
        ? { ...note, isEditing: false, content: note.originalContent }
        : note
    );
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleSaveToJson = () => {
    const jsonNotes = JSON.stringify(notes);
    const blob = new Blob([jsonNotes], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "notes.json";
    link.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsedNotes = JSON.parse(e.target?.result as string);
          setNotes(parsedNotes);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <div>
        <h1>Note Taking App</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your note"
            value={newNote}
            onChange={handleNoteChange}
          />
          <button onClick={handleAddNote}>Add Note</button>
        </div>
        <ul className="">
          <div>
            {notes.map((note) => (
              <div className="">
                <li key={note.id}>
                  {note.isEditing ? (
                    <div>
                      <input
                        type="text"
                        value={note.content}
                        onChange={(e) => {
                          const updatedContent = e.target.value;
                          const updatedNotes = notes.map((n) =>
                            n.id === note.id
                              ? { ...n, content: updatedContent }
                              : n
                          );
                          setNotes(updatedNotes);
                        }}
                      />
                      <button onClick={() => handleSaveNote(note.id)}>
                        Save
                      </button>
                      <button onClick={() => handleCancelEdit(note.id)}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div>
                      {note.content}
                      <button onClick={() => handleEditNote(note.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteNote(note.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </li>
              </div>
            ))}
          </div>
        </ul>
        <button onClick={handleSaveToJson}>Save to JSON</button>
        <div className="">
          <input type="file" accept=".json" onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
};

export default NoteApp;
