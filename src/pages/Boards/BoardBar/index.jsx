import { Box } from "@mui/material";

export default function BoardBar() {
  return (
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
  );
}
