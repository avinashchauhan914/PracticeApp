import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSplitterPipe'
})
export class stringSplitterPipe implements PipeTransform {
  transform(value: any) {
    let result = value.match(/[a-zA-Z]+/g).toString();
    return result;
  }
}
