//ListColumns
import { Box } from "@mui/material";
import Column from "./Column/Column";
import ButtonAddFile from "~/components/ButtonAddFile";

export default function ListColumns({ data }) {
    const listColumns = data?.board?.columns;
    const listIdColumns = data?.board?.columnOrderIds;
    const orderListColumns = listColumns.sort((a, b) => {
        return (
            listIdColumns.indexOf(a["_id"]) - listIdColumns.indexOf(b["_id"])
        );
    });
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
            {orderListColumns &&
                orderListColumns.map((column) => (
                    <Column key={column._id} column={column} />
                ))}
            <ButtonAddFile />
        </Box>
    );
}
