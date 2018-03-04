import { InMemoryDbService } from 'angular-in-memory-web-api';

//todo investigate deep down to source
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const product1 = {
      id: 1,
      name: 'ALOE VERA COLD RELAX GEL',
      category: {
        id: 2,
        name: 'Health Line'
      },
      properties: [
        {
          name: 'volume',
          values: ['250ml', '500ml']
        }
      ],
      brand: 'Lanzarote',
      briefDescription: 'Gel relax ideal for instant pain relief with a cool effect.',
      mainImage: 'assets/img/product/linea_salud_y_facial0034_1.jpg',
      otherImages: ['assets/img/product/linea_salud_y_facial0035_1.jpg'],
      description: {
        details: 'Gel which increases the effect on blood circulation in the extremities. Ideal to strengthen, relax and relieve leg in the case of having arthritis or joint problems. Great for sports massage. Pleasant sensation of freshness.',
        activeIngredients: '<ul>\n' +
        '<li>Complex hydro soluble of bilberry, citrus and bruco:</li>\n' +
        '<ul>\n' +
        '<li><strong>Vasoconstrictor action</strong>: relief of tired legs.</li>\n' +
        '<li><strong>Vein Protector</strong>: Stimulating circulation.</li>\n' +
        '<li><strong>Antiedema</strong>: decongestant, anti fatigue, soothing.</li>\n' +
        '</ul>\n' +
        '<li><strong>Aloe vera</strong>: Soothing, moisturizing and cell regenerator.</li>\n' +
        '<li><strong>Glycerine</strong>: Moisturizer</li>\n' +
        '<li><strong>Menthol</strong>: Refreshing</li>\n' +
        '<li><strong>Camphor</strong>: Decongestant</li>\n' +
        '</ul>',
        properties: '<ul>\n' +
        '<li>refreshing</li>\n' +
        '<li>decongestant</li>\n' +
        '</ul>',
        directions: 'Apply daily with a gentle massage as often as necessary and whenever the sensation of fatigue appears.',
      },
      price: 800,
      overallRating: 7.62
    };

    const product2 = {
      id: 2,
      name: 'HANDMADE WINE SOAP ALOE',
      category: {
        id: 5,
        name: 'Vinotherapy'
      },
      properties: [
        {
          name: 'weight',
          values: ['100', '300']
        }
      ],
      brand: 'Lanzarote',
      briefDescription: 'Gel relax ideal for instant pain relief with a cool effect.',
      mainImage: 'assets/img/product/linea_jabones0004.jpg',
      otherImages: ['assets/img/product/linea_jabones0011.jpg','assets/img/product/linea_jabones0011.jpg','assets/img/product/linea_jabones0011.jpg','assets/img/product/linea_jabones0011.jpg','assets/img/product/linea_jabones0011.jpg','assets/img/product/linea_jabones0011.jpg'],
      description: {
        details: 'Soap with a fruity touch without allergen and rich in polyphenols and tannins from wine, which regenerate dead cells and stimulate collagen production. It is an antioxidant, preventing skin aging and removing dead cells.',
        activeIngredients: '<ul>\n' +
        '<li><strong>Glycerine</strong>: Moisturizer</li>\n' +
        '<li><strong>Vitis vinifera</strong></li>\n' +
        '<li><strong>Coconut Oil</strong></li>\n' +
        '</ul>',
        directions: 'Moisten skin and apply soap on it with your fingers, using a circular motion. A soft brush can also be used for its application. Afterwards, rinse with water.',
      },
      price: 600,
      overallRating: 8.94
    };


    const categories = [
      {id: 1, name: 'skin care line'},
      {id: 2, name: 'health line'},
      {id: 3, name: 'men\'s line'},
      {id: 4, name: 'kids line'},
      {id: 5, name: 'vinotherapy'},
      {id: 6, name: 'argan line'},
      {id: 7, name: 'makeup'},
      {id: 8, name: 'gift ideas'},
      {id: 9, name: 'home'},
      {id: 10, name: 'pets'}];

    const categoriesCount = [
      {category: {id: 1, name: 'skin care line'}, count: 0},
      {category: {id: 2, name: 'health line'}, count: 1},
      {category: {id: 3, name: 'men\'s line'}, count: 0},
      {category: {id: 4, name: 'kids line'}, count: 0},
      {category: {id: 5, name: 'vinotherapy'}, count: 1},
      {category: {id: 6, name: 'argan line'}, count: 0},
      {category: {id: 7, name: 'makeup'}, count: 0},
      {category: {id: 8, name: 'gift ideas'}, count: 0},
      {category: {id: 9, name: 'home'}, count: 0},
      {category: {id: 10, name: 'pets'}, count: 0}];

    const products = [product1, product2];

    return {products, categories, categoriesCount};
  }

}


