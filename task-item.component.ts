import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input()
  task: Task | any;

  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter();

  @Output()
  @Output()
  onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  ngOnInit(): void {}
  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }

  constructor() {}
}
