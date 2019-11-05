import {Component, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {ProjectService} from '../services/project/project.service';
import {Task} from '../models/Task';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {TaskService} from '../services/task/task.service';
import {Project} from '../models/Project';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css'],
})
export class ScrumboardComponent implements OnInit {
  projectName: string;
  todo: [Task];
  inprogress: [Task];
  toverify: [Task];
  done: [Task];
  problems: [Task];
  ob: Observable<any>;
  task;
  constructor(private projectService: ProjectService, private actR: ActivatedRoute, private taskService: TaskService) {
  }
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      switch (event.container.id) {
        case 'todo': this.task = event.container.data[event.currentIndex]; this.task.status = 1;  break;
        case 'inprogress': this.task = event.container.data[event.currentIndex]; this.task.status = 2;  break;
        case 'toverify': this.task = event.container.data[event.currentIndex]; this.task.status = 3;  break;
        case 'done': this.task = event.container.data[event.currentIndex]; this.task.status = 4;  break;
        case 'problems': this.task = event.container.data[event.currentIndex]; this.task.status = 0;  break;
      }
      this.task.project = new Project();
      this.task.project.id = this.actR.snapshot.params.id;
      this.taskService.add(this.task).subscribe();
      }
  }

  ngOnInit() {
    this.projectService.findById(this.actR.snapshot.params.id).subscribe(res => {
      this.projectName = res.name;
      // @ts-ignore
      this.problems = res.tasks.filter( t => t.status === 0);
      // @ts-ignore
      this.todo = res.tasks.filter( t => t.status === 1);
      // @ts-ignore
      this.inprogress = res.tasks.filter( t => t.status === 2);
      // @ts-ignore
      this.done = res.tasks.filter( t => t.status === 4);
      // @ts-ignore
      this.toverify = res.tasks.filter( t => t.status === 3);
    });
  }

}
