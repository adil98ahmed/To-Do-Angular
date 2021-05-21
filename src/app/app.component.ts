import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'try1';
  todoItem : object;
  allData : Array<object> =[];
  reciveData($event){
      this.allData = [...this.allData,$event];    
  }
  
}
