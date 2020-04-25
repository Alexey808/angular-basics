import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {
  transform(num: number, pow: number = 2): number {
    console.log('pipe -> ', num, pow);
    return num * pow;
  }
}
