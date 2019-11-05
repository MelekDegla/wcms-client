import {Project} from './Project';

export class Task {
    id: number;
    label: string;
    description: string;
    status: number;
    project: Project;
}
