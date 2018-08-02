import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(name: any, maritalstatus: string,gender:string): any {
    if(gender=='M')
      return "Mr."+name;
    else if(gender=='F' && maritalstatus=="S")
      return "Miss."+name;
    else if(gender=='F' && maritalstatus=='M')
      return "Mrs."+name;
    else 
      return name;
  }

}
