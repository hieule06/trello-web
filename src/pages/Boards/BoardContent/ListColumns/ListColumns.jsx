//ListColumns
import { Box } from "@mui/material";
import Column from "./Column/Column";

export default function ListColumns() {
    return (
        <Box
            sx={{
                width: "100%",
                height: (theme) => `${theme.trello.boardContentHeight}`,
                display: "flex",
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#34495e" : "#3498db",
                padding: 2,
            }}
        >
            <Column />
            <Column />
        </Box>
    );
}
