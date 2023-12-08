import Head from "next/head";
import {Inter} from "next/font/google";
import Header from "@/components/Header";
import AddNote from "@/components/AddNote";
import {useDispatch, useSelector} from "react-redux";
import {setNotes, addNote, removeNote, editNote} from "../store/noteSlice";
import {RootState} from "@/store";
import Note from "@/components/Note";
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import {INote, TNoteState} from "../../types/redux/NoteState";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const notes = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [currentNotes, setCurrentNotes] = useState<null | Array<INote>>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const notesFromLocalStorage = localStorage.getItem("notes");

      if (notesFromLocalStorage) {
        dispatch(setNotes(JSON.parse(notesFromLocalStorage) as TNoteState));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (!search.length) {
      setCurrentNotes(null);
      return;
    }

    setCurrentNotes(
      notes.filter((note) => {
        return (
          note.hashTags.includes(`#${search}`) || note.hashTags.includes(search)
        );
      })
    );
  }, [search, notes]);

  return (
    <>
      <Head>
        <title>Notes App</title>
        <meta name="description" content="Notes app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header search={search} setSearch={setSearch} />

      <main className={`${inter.className}`}>
        <AddNote onAddNote={(note) => dispatch(addNote(note))} />

        <Box
          sx={{
            display: "grid",
            gap: "2rem",
            width: "100%",
          }}
        >
          {(currentNotes || notes).map((note) => (
            <Note
              key={note.id}
              note={note}
              setSearch={setSearch}
              editNoteHandler={(id, text) => dispatch(editNote({id, text}))}
              removeNoteHandler={(id) => dispatch(removeNote(id))}
            />
          ))}
        </Box>
      </main>
    </>
  );
}
