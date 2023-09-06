import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

    
  }
}
