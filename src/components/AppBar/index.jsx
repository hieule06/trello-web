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

export default function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
        <AppsIcon sx={{ color: "primary.main" }}></AppsIcon>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SvgIcon
            component={trelloLogo}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            pl={0.5}
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main"
            }}
          >
            Trello
          </Typography>
        </Box>
        <Workspaces></Workspaces>
        <Recent></Recent>
        <Starred></Starred>
        <Templaces></Templaces>
        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
        <TextField
          label="Search"
          id="outlined-search"
          type="search"
          size="small"
        />
        <ModeSelect></ModeSelect>
        <Tooltip title="Notification" sx={{ cursor: "pointer" }}>
          <Badge color="secondary" variant="dot">
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
