import {Task} from './Task';

export  class Project {
  id: number;
  name: string;
  description: string;
  estimation: number;
  tasks: [Task];
  constructor() {  }
}
