import { Button, Typography } from "@mui/material";
import "./App.css";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

function App() {
  return (
    <>
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
