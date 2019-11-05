import {Task} from './Task';

export  class Project {
  id: number;
  name: string;
  description: string;
  tasks: [Task];
  constructor() {  }
}
