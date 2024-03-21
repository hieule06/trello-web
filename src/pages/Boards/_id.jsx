// Board Details
import { Container } from "@mui/material";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import AppBar from "../../components/AppBar";

export default function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
    >
      <AppBar></AppBar>
      <BoardBar></BoardBar>
      <BoardContent></BoardContent>
    </Container>
  );
}
