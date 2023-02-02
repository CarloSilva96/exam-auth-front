import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../core/service/task/task.service";
import {Task} from "../../core/model/task";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource = new MatTableDataSource<Task>();
  fieldsTable: string[] = ['id', 'name', 'description'];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.setTasks();
  }

  setTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.dataSource.data = tasks;
    });
  }
}
