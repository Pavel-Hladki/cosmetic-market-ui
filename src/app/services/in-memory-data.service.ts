import { InMemoryDbService } from 'angular-in-memory-web-api';
//todo investigate deep down to source
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: 'MEN\'S FACIAL PACK' },
      { id: 12, name: 'ALOE VERA MAN AFTER SHAVE LOTION ' },
      { id: 13, name: 'ALOE VERA MAN MOISTURIZING BODY LOTION' },
      { id: 14, name: 'ALOE VERA MAN ANTIAGE CREAM' },
      { id: 15, name: 'ALOE VERA MAN MOISTURIZING CREAM' },
      { id: 16, name: 'ALOE PETIT CHILDREN’S LOTION' },
      { id: 17, name: 'ALOE VERA PETIT SHAMPOO GEL' },
      { id: 18, name: 'ALOE VERA PETIT BALM CREAM' },
      { id: 19, name: 'ALOE VERA PETIT COLOGNE' },
      { id: 20, name: 'ARGAN OIL' }
    ];

    const product1 = {
      id: 1,
      name: 'ALOE VERA COLD RELAX GEL',
      category: {
        id: 1,
        category: 'Health Line'
      },
      properties: {
        volume: '250',
        volumeMeasure: 'ml'
      },
      brand: 'Lanzarote',
      briefDescription: 'Gel relax ideal for instant pain relief with a cool effect.',
      images: ['linea_salud_y_facial0034_1', 'linea_salud_y_facial0035_1'],
      details: 'Gel which increases the effect on blood circulation in the extremities. Ideal to strengthen, relax and relieve leg in the case of having arthritis or joint problems. Great for sports massage. Pleasant sensation of freshness.',
      description: {
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
      }
    };

    const product2 = {
      id: 2,
      name: 'ALOE VERA COLD RELAX GEL',
      category: {
        id: 2,
        category: 'Vinotherapy'
      },
      properties: {
        volume: '100',
        volumeMeasure: 'g'
      },
      brand: 'Lanzarote',
      briefDescription: 'Gel relax ideal for instant pain relief with a cool effect.',
      images: ['linea_salud_y_facial0034_1', 'linea_salud_y_facial0035_1'],
      details: 'Gel which increases the effect on blood circulation in the extremities. Ideal to strengthen, relax and relieve leg in the case of having arthritis or joint problems. Great for sports massage. Pleasant sensation of freshness.',
      description: {
        details: 'Soap with a fruity touch without allergen and rich in polyphenols and tannins from wine, which regenerate dead cells and stimulate collagen production. It is an antioxidant, preventing skin aging and removing dead cells.',
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
      }
    };


    return {products};
  }

}


