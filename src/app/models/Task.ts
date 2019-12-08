import {Project} from './Project';
import {Log} from './Log';
import {Resource} from './Resource';

export class Task {
    id: number;
    label: string;
    description: string;
    status: number;
    project: Project;
    logs: Log[];
    problem: string;
    resources: Resource[];
    usernames: string[];
    constructor() {}
}
