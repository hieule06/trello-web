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
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <AppsIcon sx={{ color: "primary.main" }}></AppsIcon>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <SvgIcon
                        component={trelloLogo}
                        inheritViewBox
                        sx={{ color: "primary.main" }}
                        fontSize="small"
                    />
                    <Typography
                        pl={0.5}
                        sx={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "primary.main",
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
                    <Button variant="outlined" startIcon={<LibraryAddIcon />}>
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
                    sx={{ minWidth: 120 }}
                />
                <ModeSelect></ModeSelect>
                <Tooltip
                    title="Notification"
                    sx={{ cursor: "pointer", color: "primary.main" }}
                >
                    <Badge color="secondary" variant="dot">
                        <NotificationsNoneIcon />
                    </Badge>
                </Tooltip>
                <Tooltip
                    title="Help"
                    sx={{ cursor: "pointer", color: "primary.main" }}
                >
                    <HelpOutlineIcon></HelpOutlineIcon>
                </Tooltip>
                <Profiles></Profiles>
            </Box>
        </Box>
    );
}
