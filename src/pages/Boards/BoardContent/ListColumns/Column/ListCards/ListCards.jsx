//ListCards
import { Collapse } from "@mui/material";
import ItemCard from "./ItemCard/ItemCard";

export default function ListCards({ expanded, firstCard }) {
    return (
        <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            sx={{
                borderRadius: "4px",
            }}
        >
            <ItemCard firstCard={firstCard} />
            <ItemCard firstCard={firstCard} />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </Collapse>
    );
}
