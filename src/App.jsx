import { Button, Typography } from "@mui/material";
import "./App.css";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import { useColorScheme } from "@mui/material/styles";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeToggle />
      <hr />
      <div>hello world</div>
      <Typography variant="body-2" color={"text.secondary"}>
        123
      </Typography>
      <Button variant="contained" /* color="success" */>123</Button>
      <HomeRepairServiceOutlined sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
