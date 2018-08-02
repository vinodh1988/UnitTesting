import { Component } from '@angular/core';
import { DataService } from './data.service';
import { DoCheck, AfterContentInit ,AfterViewInit} from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements AfterContentInit,AfterViewInit{
  title :string;
  names:string[];
  data:string;
  //childarray:string[][]=[[],[]];
  //item:string;
  //firststring:string="One";
  //secondstring:string="Two";

 /* ngDoCheck(){
     console.log("Check method in parent");  
  }*/

   constructor(ds:DataService){
     this.title=ds.getTitle();
     this.names=ds.getNames();
   }
/*Parent template +  library template */
  ngAfterContentInit(){
     console.log("Parent content and library contentinitialized")
  }
  /* after integration all the children template*/
  ngAfterViewInit(){
     console.log("Loading all children and parent template finished");
  }
  
   addData(){
     this.names.push(this.data);
   }
   /*

   addFirst(){
     
     this.childarray[0].push(this.item);
     this.firststring=this.item;
   }

  
   addSecond(){
    this.childarray[1].push(this.item);
    this.secondstring=this.item;
  }*/
}
