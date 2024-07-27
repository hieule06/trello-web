import { Box, Button, Chip, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function BoardBar() {
    return (
        <Box
            sx={{
                height: (theme) => theme.trello.boardBarHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                borderTop: "1px solid #00bfa5",
                overflowX: "auto",
                gap: 2,
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Chip
                    sx={{
                        color: "primary.main",
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "4px",
                        "& .MuiSvgIcon-root": {
                            color: "primary.main",
                        },
                        "&:hover": {
                            bgcolor: "primary.50",
                        },
                    }}
                    icon={<DashboardIcon />}
                    label="HieuLeLeDashboard"
                    clickable
                />
                <Chip
                    sx={{
                        color: "primary.main",
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "4px",
                        "& .MuiSvgIcon-root": {
                            color: "primary.main",
                        },
                        "&:hover": {
                            bgcolor: "primary.50",
                        },
                    }}
                    icon={<VpnLockIcon />}
                    label="Public/Private Workspace"
                    clickable
                />
                <Chip
                    sx={{
                        color: "primary.main",
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "4px",
                        "& .MuiSvgIcon-root": {
                            color: "primary.main",
                        },
                        "&:hover": {
                            bgcolor: "primary.50",
                        },
                    }}
                    icon={<AddToDriveIcon />}
                    label="Add to Google Drive"
                    clickable
                />
                <Chip
                    sx={{
                        color: "primary.main",
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "4px",
                        "& .MuiSvgIcon-root": {
                            color: "primary.main",
                        },
                        "&:hover": {
                            bgcolor: "primary.50",
                        },
                    }}
                    icon={<BoltIcon />}
                    label="Automation"
                    clickable
                />
                <Chip
                    sx={{
                        color: "primary.main",
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "4px",
                        "& .MuiSvgIcon-root": {
                            color: "primary.main",
                        },
                        "&:hover": {
                            bgcolor: "primary.50",
                        },
                    }}
                    icon={<FilterListIcon />}
                    label="Filters"
                    clickable
                />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button variant="outlined" startIcon={<PersonAddIcon />}>
                    Invite
                </Button>
                <AvatarGroup
                    max={4}
                    sx={{
                        "& .MuiAvatar-root": {
                            width: "32px",
                            height: "32px",
                        },
                    }}
                >
                    <Tooltip title="HieuDev">
                        <Avatar alt="Remy Sharp" src="/public/image/1.jfif" />
                    </Tooltip>
                    <Tooltip title="HieuDev">
                        <Avatar alt="Travis Howard" src="/public/image/2.jpg" />
                    </Tooltip>
                    <Tooltip title="HieuDev">
                        <Avatar alt="Cindy Baker" src="/public/image/3.jfif" />
                    </Tooltip>
                    <Tooltip title="HieuDev">
                        <Avatar alt="Agnes Walker" src="/public/image/4.jfif" />
                    </Tooltip>
                    <Tooltip title="HieuDev">
                        <Avatar
                            alt="Trevor Henderson"
                            src="/public/image/5.jfif"
                        />
                    </Tooltip>
                </AvatarGroup>
            </Box>
        </Box>
    );
}
