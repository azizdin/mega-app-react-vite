import { useState, useEffect, useRef } from "react";
import Note from "./NoteModel";

export function useNoteViewModel() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteContent, setNewNoteContent] = useState<string>("");
  const [isAddButtonVisible, setIsAddButtonVisible] = useState<boolean>(false);

  const lastNoteRef = useRef<HTMLTextAreaElement>(null);

  const handleNoteContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    noteId: number | null
  ) => {
    const updatedContent = event.target.value;

    if (noteId === null) {
      setNewNoteContent(updatedContent);
    } else {
      const updatedNotes = notes.map((note) =>
        note.id === noteId ? { ...note, content: updatedContent } : note
      );
      setNotes(updatedNotes);
    }
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

  const handleDeleteNote = (id: number | null) => {
    if (id === null) {
      setNewNoteContent("");
    } else {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    }
  };

  useEffect(() => {
    setIsAddButtonVisible(newNoteContent.trim() !== "");
  }, [newNoteContent]);

  return {
    notes,
    newNoteContent,
    isAddButtonVisible,
    lastNoteRef,
    handleNoteContentChange,
    handleAddNote,
    handleDeleteNote,
  };
}
