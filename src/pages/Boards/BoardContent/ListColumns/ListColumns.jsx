//ListColumns
import { Box } from "@mui/material";
import Column from "./Column/Column";
import ButtonAddFile from "~/components/ButtonAddFile";
import { DndContext, DragOverlay, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { useState } from "react";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ column, activeId }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id: column._id,
        });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
        // opacity: activeId ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes}>
            <Column key={column._id} column={column} listeners={listeners} />
        </div>
    );
}

export default function ListColumns({ data }) {
    const listColumns = data?.board?.columns;
    const listIdColumns = data?.board?.columnOrderIds;
    /* const orderListColumns = listColumns.sort((a, b) => {
        return (
            listIdColumns.indexOf(a["_id"]) - listIdColumns.indexOf(b["_id"])
        );
    }); */
    const [columnIds, setColumnIds] = useState(listIdColumns);
    const [dragStartActiveId, setDragStartActiveId] = useState(null);
    const [dragEndActiveId, setDragEndActiveId] = useState(null);

    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 10,
        },
    });
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250,
            tolerance: 5,
        },
    });

    const sensors = useSensors(
        mouseSensor,
        touchSensor,
    );

    // const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setColumnIds((prevColumns) => {
                const oldIndex = prevColumns.indexOf(active.id);
                const newIndex = prevColumns.indexOf(over.id);
                return arrayMove(prevColumns, oldIndex, newIndex);
            });

            setDragEndActiveId(over.id);
        }
    };

    const handleDragStart = (event) => {
        setDragStartActiveId(event.active.id);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: (theme) => `${theme.trello.boardContentHeight}`,
                display: "flex",
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#34495e" : "#0075ff",
                padding: 2,
            }}
        >
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
            >
                <SortableContext items={columnIds}>
                    {columnIds.map((columnId) => {
                        const column = listColumns.find((c) => c._id === columnId);
                        return (
                            <SortableItem
                                key={column._id}
                                column={column}
                            />
                        );
                    })}
                </SortableContext>
                <DragOverlay
                    dropAnimation={null} style={{ opacity: 0.5 }}
                >
                    {dragStartActiveId ? (
                        <SortableItem
                            key={dragStartActiveId}
                            column={listColumns.find((c) => c._id === dragStartActiveId)}
                            activeId={dragStartActiveId}
                        />
                    ) : null}
                </DragOverlay>
            </DndContext>
            <ButtonAddFile />
        </Box>
    );
}
