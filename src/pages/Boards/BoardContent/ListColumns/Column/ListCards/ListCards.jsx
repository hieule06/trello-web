//ListCards
import { Collapse } from "@mui/material";
import ItemCard from "./ItemCard/ItemCard";

export default function ListCards({ expanded, listCards }) {
    return (
        <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            sx={{
                borderRadius: "4px",
            }}
        >
            {listCards.map((card, index) => (
                <ItemCard
                    key={card?._id}
                    showImageCard={card?.cover}
                    itemCard={card}
                    indexCard={index}
                />
            ))}
        </Collapse>
    );
}
