import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeeng'
})
export class PipeengPipe implements PipeTransform {

  transform(value: any,Ang:String) {
    if(!Ang){
      return value;
    }
    return value.filter(it=>{
      const app=it.title.toLowerCase().startsWith(Ang.toLowerCase());
      return (app);
    })
  }

}
