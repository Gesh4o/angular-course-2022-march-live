import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myJson',
  pure: false,
})
export class MyJsonPipe implements PipeTransform {

  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }

}
