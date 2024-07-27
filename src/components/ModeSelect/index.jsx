import { Box } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

export default function ModeSelect() {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event) => {
        const SelectMode = event.target.value;
        setMode(SelectMode);
    };

    return (
        <FormControl size="small" sx={{ minWidth: 120 }}>
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
                            gap: 1,
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
                            gap: 1,
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
                            gap: 1,
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
