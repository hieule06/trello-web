import { Button } from "@mui/material";
import "./App.css";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

function App() {
  return (
    <>
      <div>hello world</div>
      <Button variant="contained">123</Button>
      <HomeRepairServiceOutlined sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
