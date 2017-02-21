import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grid'
})
export class GridPipe implements PipeTransform {

  transform<T>(value: T[], cols: number): T[][] {

    const grid: T[][] = [];
    for (let i = 0; i < value.length; i += cols) {
      grid.push(value.slice(i, cols + i));
    }

    return grid;
  }

}
