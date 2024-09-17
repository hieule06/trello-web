//Column
import { Box, Button, Tooltip } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ListCards from "./ListCards/ListCards";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Column({ column }) {
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            sx={{
                height: "fit-content",
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#2c2c2c" : "#bdc3c7",
                marginRight: "20px",
            }}
        >
            <CardActions disableSpacing>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                    }}
                >
                    {column?.title}
                </Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{
                        paddingLeft: 0,
                    }}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Card
                sx={{
                    width: "300px",
                    maxHeight: "60vh",
                    overflowY: "auto",
                    bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#2c2c2c" : "#bdc3c7",
                    padding: "0 5px",
                    margin: "0 5px",
                    boxShadow: "none",
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#9ca5a9",
                    },
                }}
            >
                <ListCards
                    expanded={expanded}
                    listCards={column?.cards}
                    cardOrderIds={column?.cardOrderIds}
                />
            </Card>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "4px 10px",
                    color: "#0586fa",
                }}
            >
                <Button startIcon={<AddCardIcon />} sx={{ color: "#0586fa" }}>
                    Add new card
                </Button>
                <Tooltip title="Drag to move">
                    <DragHandleIcon sx={{ cursor: "pointer" }} />
                </Tooltip>
            </Box>
        </Card>
    );
}
