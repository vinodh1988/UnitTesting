import { Component, OnInit,Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  @Input('info') data:string;
  @Input('strings') strings:string[];
  title:string;
  constructor() { 

    console.log("In child constructor"+this.data);
  }

  /* executes when first time when component recieves
  the input values from the parent and executes every
  time when Input fields change */
  ngAfterContentInit(){
    console.log(this.data+ "child content initialized")
 }
 ngAfterViewInit(){
    console.log(this.data+ "child integrated its children completely");
 }
 

 ngOnChanges(){
    console.log("received value from parent");
 }
 /* executes everytime there is is instance members 
 first time executes just after ngonit
 */
 /*ngDoCheck(){
   console.log("child do Check");
 }*/
 /*executes after noOnchanges only once lifetime"*/
  ngOnInit() {

    console.log("child component ngonnit ");
  }

}
