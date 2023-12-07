import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Header() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <SpeakerNotesOutlinedIcon />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: "none", sm: "block"}}}
          >
            Notes
          </Typography>

          <TextField
            placeholder="Search…"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              autoComplete: "false",
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
