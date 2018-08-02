import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  names:string[];
  title:string;
  constructor() {
     this.title= 'Testing application';
     this.names=["Kiran","Krishna","Ravi","Govind","Ben","Joseph"];
   }

   getNames(){
     return this.names;
   }

   getTitle(){
     return this.title;
   }

}
