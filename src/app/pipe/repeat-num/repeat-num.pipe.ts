import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatNum'
})
export class RepeatNumPipe implements PipeTransform {

  transform(value: number): Array<number> {
    return Array(value);
  }

}
