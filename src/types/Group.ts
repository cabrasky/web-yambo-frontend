import { Project } from "./Project";

export interface Group {
    id?: number;
    name: string;
    project: Partial<Project>;
}