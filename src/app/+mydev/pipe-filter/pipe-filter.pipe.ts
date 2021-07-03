import { Pipe, PipeTransform } from '@angular/core';

interface Item { title: string; }

@Pipe({
  name: 'pipeFilter',
  pure: false // отключает оптимизация detec-changes
})
export class PipeFilterPipe implements PipeTransform {

  transform(items: Item[], search: string = ''): Item[] {
    if (!search.trim()) {
      return items;
    }

    return items.filter((item: Item) => {
      return item.title.includes(search);
    });
  }
}
