import { Box, Button, SvgIcon, TextField, Typography } from "@mui/material";
import ModeSelect from "../ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import { ReactComponent as trelloLogo } from "~/assets/trello.svg";
import Workspaces from "./Menu/Workspaces";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Templaces from "./Menu/Templaces";
import Profiles from "./Menu/Profiles";
import { Badge, Tooltip } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function AppBar() {
    return (
        <Box
            sx={{
                height: (theme) => theme.trello.appBarHeight,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "auto",
                px: 2,
                gap: 2,
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#212121" : "#01579b",
                color: "white",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <AppsIcon></AppsIcon>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <SvgIcon
                        component={trelloLogo}
                        inheritViewBox
                        fontSize="small"
                    />
                    <Typography
                        pl={0.5}
                        sx={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                        }}
                    >
                        Trello
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Workspaces></Workspaces>
                    <Recent></Recent>
                    <Starred></Starred>
                    <Templaces></Templaces>
                    <Button
                        variant="outlined"
                        startIcon={<LibraryAddIcon />}
                        sx={{
                            "&:hover": {
                                borderColor: "#FFFFFF",
                                bgcolor: (theme) =>
                                    theme.palette.mode === "dark"
                                        ? "#2c3e50"
                                        : "#0379c9",
                            },
                        }}
                    >
                        Create
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                }}
            >
                <TextField
                    label="Search"
                    id="outlined-search"
                    type="search"
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        minWidth: 120,
                        "& label": { color: "white" },
                        "& input": { color: "white" },
                        "& label.Mui-focused": { color: "white" },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "white",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "white",
                            },
                            color: "white",

                            '& input[type="search"]::-webkit-search-cancel-button':
                                {
                                    "-webkit-appearance": "none",
                                    appearance: "none",
                                    height: "16px",
                                    width: "16px",
                                    background:
                                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E\") no-repeat",
                                    cursor: "pointer",
                                },
                        },
                    }}
                />
                <ModeSelect></ModeSelect>
                <Tooltip title="Notification" sx={{ cursor: "pointer" }}>
                    <Badge variant="dot">
                        <NotificationsNoneIcon />
                    </Badge>
                </Tooltip>
                <Tooltip title="Help" sx={{ cursor: "pointer" }}>
                    <HelpOutlineIcon></HelpOutlineIcon>
                </Tooltip>
                <Profiles></Profiles>
            </Box>
        </Box>
    );
}
