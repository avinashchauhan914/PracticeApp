import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberConverterPipe'
})
export class numberConverterPipe implements PipeTransform {
  transform(value: any) {
    let result = Number(value);
    return result;
  }
}
