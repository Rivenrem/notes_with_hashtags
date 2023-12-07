import Head from "next/head";
import {Inter} from "next/font/google";
import Header from "@/components/Header";
import AddNote from "@/components/AddNote";
import {useDispatch, useSelector} from "react-redux";
import {addNote, removeNote, editNote} from "../store/noteSlice";
import {RootState} from "@/store";
import Note from "@/components/Note";
import {Grid} from "@mui/material";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const notes = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Notes App</title>
        <meta name="description" content="Notes app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={`${inter.className}`}>
        <AddNote onAddNote={(note) => dispatch(addNote(note))} />

        <Grid container spacing={2}>
          {notes.map((note) => (
            <Grid item xs="auto" key={note.id}>
              <Note
                note={note}
                editNoteHandler={(id, text) => dispatch(editNote({id, text}))}
                removeNoteHandler={(id) => dispatch(removeNote(id))}
              />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
}
