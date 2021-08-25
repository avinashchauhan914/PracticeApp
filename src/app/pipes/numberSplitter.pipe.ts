import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSplitterPipe'
})
export class numberSplitterPipe implements PipeTransform {
  transform(value: any) {
    let result = Number(value.match(/\d+/g));
    return result;
  }
}
