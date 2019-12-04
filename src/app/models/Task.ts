import {Project} from './Project';
import {Log} from './Log';

export class Task {
    id: number;
    label: string;
    description: string;
    status: number;
    project: Project;
    logs: Log[];
    problem: string;
    constructor() {}
}
