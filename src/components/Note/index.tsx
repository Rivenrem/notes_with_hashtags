import Paper from "@mui/material/Paper";
import {INote} from "@/../types/redux/NoteState";
import {TextField, IconButton, Typography, Box, Divider} from "@mui/material";
import {useState} from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {theme} from "@/styles/theme";

export default function Note({
  note,
  editNoteHandler,
  removeNoteHandler,
  setSearch,
}: {
  note: INote;
  editNoteHandler: (text: string, id: string) => void;
  removeNoteHandler: (id: string) => void;
  setSearch: (value: string) => void;
}) {
  const [textFieldValue, setTextFieldValue] = useState(note.text);

  return (
    <Paper elevation={3} sx={{padding: "2rem", position: "relative"}}>
      <IconButton
        onClick={() => removeNoteHandler(note.id)}
        sx={{position: "absolute", top: "0.5rem", right: "0.5rem"}}
      >
        <DeleteOutlineIcon />
      </IconButton>

      <TextField
        multiline
        maxRows={10}
        value={textFieldValue}
        onChange={({target: {value}}) => {
          setTextFieldValue(value);
          editNoteHandler(note.id, value);
        }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          width: "100%",
        }}
      />

      {!!note.hashTags.length && (
        <Box>
          <Divider />

          <Typography>HashTags: </Typography>

          {note.hashTags.map((hashTag) => (
            <Typography
              key={note.hashTags.indexOf(hashTag)}
              sx={{
                cursor: "pointer",
                textDecoration: "underline",
                color: theme.palette.primary.dark,
              }}
              onClick={() => setSearch(hashTag)}
            >
              {hashTag}
            </Typography>
          ))}
        </Box>
      )}
    </Paper>
  );
}
