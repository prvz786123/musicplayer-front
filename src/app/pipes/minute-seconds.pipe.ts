import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    let minutes = Math.floor(value / 60);
    let sec = value - minutes * 60;

    if(minutes<10 && sec<10){
      return "0"+minutes + ':' +"0"+(value - minutes * 60); 
    }else if(minutes<10){
      return "0"+minutes + ':' + (value - minutes * 60); 
    }else if(sec<10){
      return minutes + ':' + "0"+(value - minutes * 60); 
    }
 }

}
