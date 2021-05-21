import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
interface  todoItem {name:string,status:boolean};
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
//interface  todoItem {name:string,status:boolean};
export class ChildComponent implements OnInit {
  todo : todoItem;
  constructor() { }
  todoText:string;
  @Output() eventEmmiter = new EventEmitter <object>();
  ngOnInit(): void {
  }

  sendData($event){
    let todo : todoItem = {name:this.todoText,status:false}
    console.log(todo.name)
    if(todo.name != undefined && todo.name !== "")
    {this.eventEmmiter.emit(todo);}
  }
  change($event){
    this.todoText=$event.target.value;
  }

}
