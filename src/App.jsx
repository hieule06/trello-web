import { Box, Container } from "@mui/material";
import "./App.css";
import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const SelectMode = event.target.value;
    setMode(SelectMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-duck-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-duck-light-mode"
        id="select-duck-light-mode"
        value={mode}
        label="mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            <LightModeIcon fontSize="small"></LightModeIcon>
            Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            <NightlightIcon fontSize="small"></NightlightIcon>
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            <SettingsBrightnessIcon fontSize="small"></SettingsBrightnessIcon>
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
    >
      <Box
        sx={{
          height: (theme) => theme.trello.appBarHeight,
          width: "100%",
          backgroundColor: "primary.dark",
          display: "flex",
          alignItems: "center"
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          height: (theme) => theme.trello.boardBarHeight,
          width: "100%",
          backgroundColor: "primary.light",
          display: "flex",
          alignItems: "center"
        }}
      >
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: "flex",
          alignItems: "center"
        }}
      >
        Board Content
      </Box>
    </Container>
  );
}

export default App;
