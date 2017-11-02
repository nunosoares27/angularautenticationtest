import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterByName'
})
export class FilterPipe implements PipeTransform {


//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });
//    }


 
  transform(input: any[], searchText: any[]){
    var output: any[] = [];
    if(!input) return [];
    if(!searchText) return input;
    searchText = searchText;
    for (var i = 0; i < input.length; i++) {
      if (input[i].first_name === searchText) {
        output.push(input[i]);
      }
    }
    return output;
  }



}