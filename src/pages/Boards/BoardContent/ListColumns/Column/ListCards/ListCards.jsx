//ListCards

import { Collapse } from "@mui/material";
import ItemCard from "./ItemCard/ItemCard";
import {
    DndContext,
    closestCenter,
    useSensor,
    useSensors,
    PointerSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

function SortableItem({ card, index }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id: card._id,
        });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <ItemCard
                key={card?._id}
                showImageCard={card?.cover}
                itemCard={card}
                indexCard={index}
            />
        </div>
    );
}

export default function ListCards({ expanded, listCards, cardOrderIds }) {
    const [cards, setCards] = useState(cardOrderIds);

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setCards((prevCards) => {
                const oldIndex = prevCards.indexOf(active.id);
                const newIndex = prevCards.indexOf(over.id);
                return arrayMove(prevCards, oldIndex, newIndex);
            });
        }
    };

    return (
        <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            sx={{
                borderRadius: "4px",
            }}
        >
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={cards}>
                    {cards.map((cardId, index) => {
                        const card = listCards.find((c) => c._id === cardId);
                        return (
                            <SortableItem
                                key={card._id}
                                card={card}
                                index={index}
                            />
                        );
                    })}
                </SortableContext>
            </DndContext>
        </Collapse>
    );
}
