import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return only Hamburger', () => {
    const pipe = new SearchPipe();
    const menus = [
      {
        id: '1',
        title: 'Hamburger',
        image: 'image',
        imageBucket: 'bucket',
        ingredients: ['Brot', 'Fleisch'],
        duration: 60,
        tags: ['Grill']
      },
      {
        id: '2',
        title: 'Teigwaren',
        image: 'image',
        imageBucket: 'bucket',
        ingredients: ['Teig', 'Waren'],
        duration: 60,
        tags: ['Vegetarisch']
      },
      {
        id: '3',
        title: 'Fisch',
        image: 'image',
        imageBucket: 'bucket',
        ingredients: ['Salz', 'Kapern'],
        duration: 60,
        tags: ['Grill']
      }
    ];
    const search = {
      searchText: 'Ham',
      searchTags: ['Grill']
    };

    const result = pipe.transform(menus, search);

    expect(result.length).toBe(1);
    expect(result[0].title).toBe('Hamburger');
  });
});
