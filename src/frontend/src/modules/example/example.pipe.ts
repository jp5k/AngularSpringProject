import { Pipe, PipeTransform } from '@angular/core';
/*
 * do your data transformations here
*/
@Pipe({name: 'ExamplePipe'})
export class ExamplePipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    const exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
