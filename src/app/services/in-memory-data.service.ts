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
    return {products};
  }
}
