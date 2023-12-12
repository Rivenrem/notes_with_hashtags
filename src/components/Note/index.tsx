import Paper from "@mui/material/Paper";
import {INote} from "@/../types/redux/NoteState";
import {TextField, IconButton, Typography, Box, Divider} from "@mui/material";
import {useState} from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {theme} from "@/styles/theme";
import Hashtags from "../../helpers/highlightHashTags";

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
    <Paper elevation={3} sx={{position: "relative", padding: "3rem"}}>
      <IconButton
        onClick={() => removeNoteHandler(note.id)}
        sx={{position: "absolute", top: "0.5rem", right: "0.5rem"}}
      >
        <DeleteOutlineIcon />
      </IconButton>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography sx={{width: "100%"}}>
          <Hashtags>{textFieldValue}</Hashtags>
        </Typography>

        <TextField
          multiline
          maxRows={10}
          spellCheck="false"
          value={textFieldValue}
          onChange={({target: {value}}) => {
            setTextFieldValue(value);
            editNoteHandler(note.id, value);
          }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              width: "100%",
            },
            "& .MuiInputBase-root": {
              padding: "0",
              color: "transparent",
              caretColor: "black",

              width: "100%",
            },
            position: "absolute",
            top: "0",
            left: "0",
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
      </Box>
    </Paper>
  );
}
