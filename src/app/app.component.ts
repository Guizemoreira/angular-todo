import { Component, Input, OnInit } from '@angular/core';
import { Task } from './interface/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title :string = 'newToDo';

  taskText: string | undefined;
  tasks: string[] = [];
  error: string | undefined;

  ngOnInit(){
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }


  onCompleteTask(){
    this.tasks.filter(task => this.tasks.completed);
  }
  onNoCompleteTask(){
    this.tasks.filter(task => !this.tasks.completed);
  }
  
  saveTask() :void {
    this.error = undefined;
    if(!this.taskText) {
      this.error = 'No task to save';
      return;     
    }
    //this.tasks.push(this.taskText);
    this.tasks.push({text: this.tasks, completed: false});
    this.taskText = undefined;

    //LocalStorage
    window.localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }

  

}
