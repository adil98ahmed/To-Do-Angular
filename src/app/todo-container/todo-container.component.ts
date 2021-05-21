import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() todoItem :object;
  @Input() allItems :object[];
  removeElment(val){

  }
  delete($item){
    for(var i = 0 ; i < this.allItems.length ;i++){
      if(this.todoItem['name'] == this.allItems[i]['name']){
        this.allItems.splice(i,1);
      }
    }
  }
  mark($item){
    for(var i = 0 ; i < this.allItems.length ;i++){
      
      if(this.todoItem['name'] == this.allItems[i]['name']){
        this.allItems[i]['status']=true;
      }
    }
  }
  
  
}
