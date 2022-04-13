import { Component } from '@angular/core';
import { GetdataService } from './getdata.service';
import { Mytype} from './mytype';
import { cofee } from './ping';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'w2';
  CofeeObj: cofee={file:"https://coffee.alexflipnote.dev/si6lqp_fnlI_coffee.jpg"};

  constructor(private mydata: GetdataService){

  }
  getCofee(){
    this.mydata.getData().subscribe(data =>this.CofeeObj = data);
    console.log(this.CofeeObj); 

  }
   

  

}
