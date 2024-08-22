//ListColumns
import { Box } from "@mui/material";
import Column from "./Column/Column";
import ButtonAddFile from "~/components/ButtonAddFile";

export default function ListColumns() {
    return (
        <Box
            sx={{
                width: "100%",
                height: (theme) => `${theme.trello.boardContentHeight}`,
                display: "flex",
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#34495e" : "#0075ff",
                padding: 2,
            }}
        >
            <Column />
            <Column firstCard />
            <ButtonAddFile />
        </Box>
    );
}
