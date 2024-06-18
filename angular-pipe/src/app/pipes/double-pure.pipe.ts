import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doublePure',
  pure:true
})
export class DoublePurePipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): unknown {

    console.log("DoublePurePipe called")
    
    return value.map((el:number)=>el*2) ;
  }

}
