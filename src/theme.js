import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { deepOrange, orange, teal, cyan } from "@mui/material/colors";

const HEIGHT_APP_BAR = 58;
const HEIGHT_BOARD_BAR = 58;
const HEIGHT_BOARD_CONTENT = `calc(100vh - ${HEIGHT_APP_BAR}px - ${HEIGHT_BOARD_BAR}px)`;

// Create a theme instance.
const theme = extendTheme({
    trello: {
        appBarHeight: HEIGHT_APP_BAR,
        boardBarHeight: HEIGHT_BOARD_BAR,
        boardContentHeight: HEIGHT_BOARD_CONTENT,
    },
    colorSchemes: {
        // light: {
        //     palette: {
        //         primary: teal,
        //         secondary: deepOrange,
        //     },
        // },
        // dark: {
        //     palette: {
        //         primary: cyan,
        //         secondary: orange,
        //     },
        // },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "*::-webkit-scrollbar": {
                        width: "8px",
                        height: "8px",
                    },
                    "*::-webkit-scrollbar-thumb": {
                        backgroundColor: "#bdc3c7",
                        borderRadius: "8px",
                    },
                    "*::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#00b894",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    color: "white",
                    borderColor: "white",
                    borderWidth: "0.5px",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    // color: theme.palette.primary.main,
                    fontSize: "0.875rem",
                    color: "white",
                }),
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    // color: theme.palette.primary.main,
                    color: "white",
                    fontSize: "0.875rem",
                    svg: {
                        color: "white",
                    },
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        borderWidth: "0.5px",
                        // borderColor: theme.palette.primary.light,
                    },
                    "&:hover": {
                        ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                            // borderColor: theme.palette.primary.main,
                        },
                    },
                }),
            },
        },
    },
});

export default theme;
