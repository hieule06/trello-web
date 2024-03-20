import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
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

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeSelect />
      <ModeToggle />
      <hr />
      <div>hello world</div>
      <Typography variant="body-2" color={"text.secondary"}>
        123
      </Typography>
      <Button variant="contained" /* color="success" */>123</Button>
      <HomeRepairServiceOutlined sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
