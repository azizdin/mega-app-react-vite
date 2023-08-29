import React, { useState, useEffect, useRef } from "react";
import { Assets } from "@/assets/assets";
const NoteApp: React.FC = () => {
  interface Note {
    id: number;
    content: string;
  }

  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteContent, setNewNoteContent] = useState<string>("");
  const [isAddButtonVisible, setIsAddButtonVisible] = useState<boolean>(false);

  const lastNoteRef = useRef<HTMLTextAreaElement>(null);

  const handleNoteContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewNoteContent(event.target.value);
  };

  const handleAddNote = () => {
    if (newNoteContent.trim() === "") return;

    const newNoteItem: Note = {
      id: Date.now(),
      content: newNoteContent,
    };

    setNotes([...notes, newNoteItem]);
    setNewNoteContent("");
  };

  const handleDeleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  useEffect(() => {
    setIsAddButtonVisible(newNoteContent.trim() !== "");
  }, [newNoteContent]);

  return (
    <div className="">
      <ul className="">
        <div className="flex flex-wrap gap-4 p-4">
          {notes.map((note) => (
            <div
              className=" relative bg-amber-400 rounded shadow-md p-2 w-72"
              key={note.id}
            >
              <li className="">
                <div className="w-full h-64 overflow-hidden">
                  <textarea
                    className="bg-amber-400 resize-none w-full h-full overflow-hidden outline-none"
                    value={note.content}
                    onChange={(e) => {
                      const updatedContent = e.target.value;
                      const updatedNotes = notes.map((n) =>
                        n.id === note.id ? { ...n, content: updatedContent } : n
                      );
                      setNotes(updatedNotes);
                    }}
                  />
                </div>
                <button
                  className="absolute bg-red-500 hover:bg-red-800 shadow-sm p-0 pr-1 w-6 h-6 rounded-full -top-3 -right-3"
                  onClick={() => handleDeleteNote(note.id)}
                >
                  <Assets.IconSVG.XMark />
                </button>
              </li>
            </div>
          ))}
          <div className=" relative bg-amber-400 rounded shadow-md p-2 w-72">
            <div className="w-full h-64 overflow-hidden">
              <textarea
                className=" bg-amber-400 resize-none w-full h-full overflow-hidden outline-none"
                placeholder="Enter note content"
                value={newNoteContent}
                onChange={handleNoteContentChange}
                ref={lastNoteRef}
              />
            </div>
          </div>
          {isAddButtonVisible && (
            <button
              className="relative bg-amber-500 hover:bg-amber-600 rounded shadow-md w-72 p-2"
              onClick={handleAddNote}
            >
              <div className="h-64 flex items-center justify-center">
                <span className="inline-block text-3xl text-white font-semibold">
                  Add Note
                </span>
              </div>
            </button>
          )}
        </div>
      </ul>
    </div>
  );
};

export default NoteApp;
