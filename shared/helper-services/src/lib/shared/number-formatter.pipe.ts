import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormatter'
})
export class NumberFormatterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return ((Math.log10(value) / 3 | 0) == 0) ? value : Number((value / Math.pow(10, (Math.log10(value) / 3 | 0) * 3)).toFixed(1)) + ["", "K", "M", "B", "T",][Math.log10(value) / 3 | 0]
  }

}
