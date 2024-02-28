import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageURL',
  standalone: true
})
export class ImageURLPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    console.log(args[0]);
    if (value[1]){
      return value[1].url;
    } else if (args[0]){
      return args[0];
    }
    return "https://upload.wikimedia.org/wikipedia/commons/2/22/Geen_foto_helaas_beschikbaar.png";
  }

}
