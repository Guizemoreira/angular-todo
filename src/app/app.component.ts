import { Component, Input, OnInit } from '@angular/core';

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
  
  saveTask() :void {
    this.error = undefined;
    if(!this.taskText) {
      this.error = 'No task to save';
      return;     
    }
    this.tasks.push(this.taskText);
    this.taskText = undefined;

    //LocalStorage
    window.localStorage.setItem('todo-list', JSON.stringify(this.tasks));

  }

  ngOnInit(){
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }


  onCompleteTask(){
    this.tasks.filter(task => task.completed);
  }
  onNoCompleteTask(){
    this.tasks.filter(task => !task.completed);
  }

}
