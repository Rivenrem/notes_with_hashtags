import {TextField, InputAdornment} from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import {useState, KeyboardEvent} from "react";

export default function AddNote({
  onAddNote,
}: {
  onAddNote: (note: string) => void;
}) {
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" || !textFieldValue.length) return;
    onAddNote(textFieldValue);
    setTextFieldValue("");
  };

  return (
    <TextField
      type="text"
      placeholder="New note"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AddTaskIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "100%",
        autoComplete: "false",

        "& .MuiInputBase-root": {
          borderRadius: "2rem",
        },
      }}
      value={textFieldValue}
      onChange={({target: {value}}) => {
        setTextFieldValue(value);
      }}
      onKeyDown={(event) => handleKeyDown(event)}
    />
  );
}
