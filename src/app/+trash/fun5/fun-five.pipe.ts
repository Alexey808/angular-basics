import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'funFive'
})
export class FunFivePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
