import { Group } from "./Group";

export interface Monitor {
    id?: number;
    name: string;
    description: string;
    image: string;
    groups: Partial<Group>[];
}
