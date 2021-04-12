import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(menus: Menu[], searchText: string): Menu[] {
    if (!menus) {
      return [];
    }
    if (!searchText) {
      return menus;
    }

    searchText = searchText.toLowerCase();

    return menus.filter(menu => {
      const ingredients = menu.ingredients.map(ingredient => ingredient.toLowerCase());
      const tags = menu.tags.map(tag => tag.toLowerCase());
      return menu.title.includes(searchText)
        || ingredients.includes(searchText)
        || tags.includes(searchText);
    });
  }

}
