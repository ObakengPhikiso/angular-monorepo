import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(seconds: number, ...args: unknown[]): unknown {
    const minutes = ~~(seconds / 60);
    const extraSeconds = seconds % 60;
    return `${minutes}:${extraSeconds}`;
  }

}
