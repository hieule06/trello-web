import { Box } from "@mui/material";

export default function BoardContent() {
    return (
        <Box
            sx={{
                borderTop: "1px solid #FFFFFF",
                width: "100%",
                height: (theme) =>
                    `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
                display: "flex",
                alignItems: "center",
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#34495e" : "#3498db",
            }}
        >
            Board Content
        </Box>
    );
}
