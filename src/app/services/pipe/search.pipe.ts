import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(menus: Menu[], searchForm: any): Menu[] {
    if (!menus) {
      return [];
    }
    let { searchText, searchTags } = searchForm;
    if (!searchText && searchTags.length === 0) {
      return menus;
    }
    // TODO: continue here
    searchText = searchText.toLowerCase();
    searchTags = searchTags.map(tag => tag.toLowerCase());

    return menus.filter(menu => {

      const matchingIngredients = menu.ingredients
        .filter(ingredient => ingredient.toLowerCase().includes(searchText));

      const matchingTags = menu.tags
        .filter(tag => tag.toLowerCase().includes(searchText));

      return menu.title.toLowerCase().includes(searchText)
        || matchingIngredients.length !== 0
        || matchingTags.length !== 0;
    });
  }

}
