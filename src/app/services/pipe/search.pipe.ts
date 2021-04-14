import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { Search } from 'src/app/models/search.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(menus: Menu[], searchForm: Search): Menu[] {
    if (!menus) {
      return [];
    }

    const hasSearchText = searchForm.searchText.trim().length !== 0;
    const hasSearchTags = searchForm.searchTags.length !== 0;

    if (!hasSearchText && !hasSearchTags) {
      return menus;
    }
    if (hasSearchTags) {
      menus = menus.filter(menu => {
        let hasAllTags = true;
        searchForm.searchTags.forEach(tag => {
          if (!menu.tags.includes(tag)) {
            hasAllTags = false;
          }
        });
        return hasAllTags;
      });
    }
    if (hasSearchText) {
      const searchText = searchForm.searchText.toLowerCase();
      menus = menus.filter(menu => {
        const ingredientsMatch = menu.ingredients
          .filter(ingredient => ingredient.toLowerCase().includes(searchText));
        const tagsMatch = menu.tags
          .filter(tag => tag.toLowerCase().includes(searchText));
        return menu.title.toLowerCase().includes(searchText)
          || ingredientsMatch.length !== 0
          || tagsMatch.length !== 0;
      });
    }
    return menus;
  }

}
