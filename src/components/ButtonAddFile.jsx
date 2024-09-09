import { Button } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

export default function ButtonAddFile() {
    return (
        <Button
            startIcon={<NoteAddIcon />}
            sx={{
                bgcolor: "#002eff",
                height: "fit-content",
                padding: "6px 20px",
                "&:hover": {
                    bgcolor: "#0098ff",
                },
            }}
        >
            Add new column
        </Button>
    );
}
