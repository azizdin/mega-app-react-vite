import React from "react";
import { useNoteViewModel } from "./NoteViewModel";
import { Assets } from "@/assets/Assets";
import "./noteApp.css";

const NoteApp: React.FC = () => {
  const {
    notes,
    newNoteContent,
    isAddButtonVisible,
    lastNoteRef,
    handleNoteContentChange,
    handleAddNote,
    handleDeleteNote,
  } = useNoteViewModel();

  return (
    <ul>
      <div className="flex flex-wrap gap-4 p-4">
        {notes.map((note) => (
          <div className=" stickyNote" key={note.id}>
            <li className="">
              <div className="w-full h-64 overflow-hidden">
                <textarea
                  className="noteInput"
                  value={note.content}
                  onChange={(e) => handleNoteContentChange(e, note.id)}
                />
              </div>
              <button
                aria-label="Delete Note"
                className="closeBtn"
                onClick={() => handleDeleteNote(note.id)}
              >
                <Assets.IconSVG.XMark />
              </button>
            </li>
          </div>
        ))}
        <div className=" stickyNote">
          <li>
            <div className="w-full h-64 overflow-hidden">
              <textarea
                className=" noteInput"
                placeholder="Enter note content"
                value={newNoteContent}
                onChange={(e) => handleNoteContentChange(e, null)}
                ref={lastNoteRef}
              />
            </div>
            {isAddButtonVisible && (
              <div>
                {" "}
                <button className="addBtn" onClick={handleAddNote}>
                  <Assets.IconSVG.Add />
                </button>
                <button
                  aria-label="Delete Note"
                  className="closeBtn"
                  onClick={() => handleDeleteNote(null)}
                >
                  <Assets.IconSVG.XMark />
                </button>
              </div>
            )}
          </li>
        </div>
      </div>
    </ul>
  );
};

export default NoteApp;
