// import React from "react";
// import {
//     DndContext,
//     closestCenter,
//     useSensor,
//     useSensors,
//     PointerSensor,
// } from "@dnd-kit/core";
// import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// // Thành phần để hiển thị từng mục trong danh sách kéo thả
// function SortableItem({ id }) {
//     const { attributes, listeners, setNodeRef, transform, transition } =
//         useSortable({ id });

//     const style = {
//         transform: CSS.Transform.toString(transform),
//         transition,
//         padding: "8px",
//         border: "1px solid #ccc",
//         marginBottom: "4px",
//         backgroundColor: "white",
//         cursor: "grab",
//     };

//     return (
//         <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//             Mục {id}
//         </div>
//     );
// }

// // Thành phần chính hiển thị danh sách có thể kéo thả
// export default function App() {
//     const [items, setItems] = React.useState([1, 2, 3, 4, 5]);

//     const sensors = useSensors(useSensor(PointerSensor));

//     const handleDragEnd = (event) => {
//         const { active, over } = event;

//         if (active.id !== over.id) {
//             setItems((prevItems) => {
//                 const oldIndex = prevItems.indexOf(active.id);
//                 const newIndex = prevItems.indexOf(over.id);
//                 return arrayMove(prevItems, oldIndex, newIndex);
//             });
//         }
//     };

//     return (
//         <DndContext
//             sensors={sensors}
//             collisionDetection={closestCenter}
//             onDragEnd={handleDragEnd}
//         >
//             <SortableContext items={items}>
//                 {items.map((id) => (
//                     <SortableItem key={id} id={id} />
//                 ))}
//             </SortableContext>
//         </DndContext>
//     );
// }

import Board from "./pages/Boards/_id";

function App() {
    // React router DOM / Board/Board_id
    return <Board></Board>;
}

export default App;
