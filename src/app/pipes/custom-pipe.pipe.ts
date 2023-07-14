import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom-pipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number, plus: number = 5): any {
    return value + plus;
  }

}
