import { Component } from '@angular/core';
import {InfoService} from './services/Info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray=[]
  addTodo(value){
    this.todoArray.push(value)
    console.log(this.todoArray)
  }
}


