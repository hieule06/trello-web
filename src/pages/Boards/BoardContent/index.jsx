import { Box, Button, Tooltip } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PeopleIcon from "@mui/icons-material/People";
import CommentIcon from "@mui/icons-material/Comment";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";

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

export default function BoardContent() {
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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
                        Column title
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
                        width: "250px",
                        maxHeight: "60vh",
                        overflowY: "auto",
                        bgcolor: (theme) =>
                            theme.palette.mode === "dark"
                                ? "#2c2c2c"
                                : "#bdc3c7",
                        padding: "0 5px",
                        margin: "0 5px",
                        boxShadow: "none",
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#9ca5a9",
                        },
                    }}
                >
                    <Collapse
                        in={expanded}
                        timeout="auto"
                        unmountOnExit
                        sx={{
                            borderRadius: "4px",
                        }}
                    >
                        <Card>
                            <CardContent
                                sx={{
                                    "&:last-child": { p: 0 },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="/src/assets/images/paella.jpg"
                                    alt="Paella dish"
                                    sx={{
                                        borderTopRightRadius: "4px",
                                        borderTopLeftRadius: "4px",
                                    }}
                                />
                                <Typography
                                    paragraph
                                    sx={{
                                        padding: "10px 10px 0 10px",
                                        margin: 0,
                                    }}
                                >
                                    Heat 1/2 cup of the broth in a pot until
                                </Typography>
                                <CardActions sx={{ padding: "8px 0" }}>
                                    <Button
                                        size="small"
                                        startIcon={<PeopleIcon />}
                                        sx={{ color: "#0586fa" }}
                                    >
                                        20
                                    </Button>
                                    <Button
                                        size="small"
                                        startIcon={<CommentIcon />}
                                        sx={{ color: "#0586fa" }}
                                    >
                                        15
                                    </Button>
                                    <Button
                                        size="small"
                                        startIcon={<InsertLinkIcon />}
                                        sx={{ color: "#0586fa" }}
                                    >
                                        10
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: "pointer",
                                marginBlock: "10px",
                            }}
                        >
                            <CardContent
                                sx={{
                                    boxShadow: "1px 1px rgba(0, 0, 0, 0.2)",
                                    "&:last-child": { p: 1.5 },
                                }}
                            >
                                <Typography paragraph sx={{ margin: 0 }}>
                                    Card 01
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: "pointer",
                                marginBlock: "10px",
                            }}
                        >
                            <CardContent
                                sx={{
                                    boxShadow: "1px 1px rgba(0, 0, 0, 0.2)",
                                    "&:last-child": { p: 1.5 },
                                }}
                            >
                                <Typography paragraph sx={{ margin: 0 }}>
                                    Card 01
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: "pointer",
                                marginBlock: "10px",
                            }}
                        >
                            <CardContent
                                sx={{
                                    boxShadow: "1px 1px rgba(0, 0, 0, 0.2)",
                                    "&:last-child": { p: 1.5 },
                                }}
                            >
                                <Typography paragraph sx={{ margin: 0 }}>
                                    Card 01
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: "pointer",
                                marginBlock: "10px",
                            }}
                        >
                            <CardContent
                                sx={{
                                    boxShadow: "1px 1px rgba(0, 0, 0, 0.2)",
                                    "&:last-child": { p: 1.5 },
                                }}
                            >
                                <Typography paragraph sx={{ margin: 0 }}>
                                    Card 01
                                </Typography>
                            </CardContent>
                        </Card>
                    </Collapse>
                </Card>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "4px 0",
                        color: "#0586fa",
                    }}
                >
                    <Button
                        startIcon={<AddCardIcon />}
                        sx={{ color: "#0586fa" }}
                    >
                        Add new card
                    </Button>
                    <Tooltip title="Drag to move">
                        <DragHandleIcon sx={{ cursor: "pointer" }} />
                    </Tooltip>
                </Box>
            </Card>
            <Card
                sx={{
                    height: "fit-content",
                    bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#2c2c2c" : "#bdc3c7",
                    marginRight: "20px",
                    padding: "0 10px",
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
                        Column title
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
                        width: "250px",
                        maxHeight: "60vh",
                        overflowY: "auto",
                        bgcolor: (theme) =>
                            theme.palette.mode === "dark"
                                ? "#2c2c2c"
                                : "#bdc3c7",
                        padding: "0 5px",
                        margin: "0 5px",
                        boxShadow: "none",
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#9ca5a9",
                        },
                    }}
                >
                    <Collapse
                        in={expanded}
                        timeout="auto"
                        unmountOnExit
                        sx={{
                            borderRadius: "4px",
                        }}
                    >
                        <Card>
                            <CardContent
                                sx={{
                                    "&:last-child": { p: 0 },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="/src/assets/images/paella.jpg"
                                    alt="Paella dish"
                                    sx={{
                                        borderTopRightRadius: "4px",
                                        borderTopLeftRadius: "4px",
                                    }}
                                />
                                <Typography
                                    paragraph
                                    sx={{
                                        padding: "10px 10px 0 10px",
                                        margin: 0,
                                    }}
                                >
                                    Heat 1/2 cup of the broth in a pot until
                                </Typography>
                                <CardActions sx={{ padding: "8px 0" }}>
                                    <Button
                                        size="small"
                                        startIcon={<PeopleIcon />}
                                        sx={{ color: "#0586fa" }}
                                    >
                                        20
                                    </Button>
                                    <Button
                                        size="small"
                                        startIcon={<CommentIcon />}
                                        sx={{ color: "#0586fa" }}
                                    >
                                        15
                                    </Button>
                                    <Button
                                        size="small"
                                        startIcon={<InsertLinkIcon />}
                                        sx={{ color: "#0586fa" }}
                                    >
                                        10
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: "pointer",
                                marginBlock: "10px",
                            }}
                        >
                            <CardContent
                                sx={{
                                    boxShadow: "1px 1px rgba(0, 0, 0, 0.2)",
                                    "&:last-child": { p: 1.5 },
                                }}
                            >
                                <Typography paragraph sx={{ margin: 0 }}>
                                    Card 01
                                </Typography>
                            </CardContent>
                        </Card>
                    </Collapse>
                </Card>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "4px 0",
                        color: "#0586fa",
                    }}
                >
                    <Button
                        startIcon={<AddCardIcon />}
                        sx={{ color: "#0586fa" }}
                    >
                        Add new card
                    </Button>
                    <Tooltip title="Drag to move">
                        <DragHandleIcon sx={{ cursor: "pointer" }} />
                    </Tooltip>
                </Box>
            </Card>
        </Box>
    );
}
