import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any[] {

    if (!args) {
      return value;
    }else{
      args=args.toLowerCase();
    }

    return value.filter(user=>{
      return user.nome.startsWith(args);
    })
    }
}
