import { Box } from "@mui/material";
import ModeSelect from "../ModeSelect";

export default function AppBar() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        width: "100%",
        backgroundColor: "primary.dark",
        display: "flex",
        alignItems: "center"
      }}
    >
      <ModeSelect></ModeSelect>
    </Box>
  );
}
