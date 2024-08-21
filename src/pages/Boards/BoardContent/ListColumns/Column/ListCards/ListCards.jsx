//ListCards
import { Collapse } from "@mui/material";
import ItemCard from "./ItemCard/ItemCard";

export default function ListCards({ expanded }) {
    return (
        <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            sx={{
                borderRadius: "4px",
            }}
        >
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </Collapse>
    );
}
