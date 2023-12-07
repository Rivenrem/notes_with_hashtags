import Paper from "@mui/material/Paper";
import {INote} from "@/../types/redux/NoteState";
import {TextField, IconButton} from "@mui/material";
import {useState} from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Note({
  note,
  editNoteHandler,
  removeNoteHandler,
}: {
  note: INote;
  editNoteHandler: (text: string, id: string) => void;
  removeNoteHandler: (id: string) => void;
}) {
  const [textFieldValue, setTextFieldValue] = useState(note.text);

  return (
    <Paper elevation={3} sx={{padding: "1rem"}}>
      <IconButton onClick={() => removeNoteHandler(note.id)}>
        <DeleteOutlineIcon />
      </IconButton>

      <TextField
        value={textFieldValue}
        onChange={({target: {value}}) => {
          setTextFieldValue(value);
          editNoteHandler(note.id, textFieldValue);
        }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
    </Paper>
  );
}
