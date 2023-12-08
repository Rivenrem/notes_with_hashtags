import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  useTheme,
} from "@mui/material";

import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Header({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  const theme = useTheme();

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
          <SpeakerNotesOutlinedIcon />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: {xs: "none", sm: "block"},
            }}
          >
            Notes
          </Typography>

          <TextField
            placeholder="Search by hashTag…"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              autoComplete: "false",
              color: theme.palette.text.primary,
            }}
            onChange={({target: {value}}) => {
              setSearch(value);
            }}
            value={search}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
