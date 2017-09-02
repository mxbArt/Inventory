import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // value - value to filter, filterString - string, that correct value need to contain.
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '' || !filterString) {
      return value;
    }

    const resultArray = [];
    for (const item of value){
      if (item[propName].toLowerCase().startsWith(filterString.toLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
