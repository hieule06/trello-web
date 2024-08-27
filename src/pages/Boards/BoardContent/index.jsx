import { mockData } from "~/apis/mock-data";
import ListColumns from "./ListColumns/ListColumns";

export default function BoardContent() {
    return <ListColumns data={mockData} />;
}
