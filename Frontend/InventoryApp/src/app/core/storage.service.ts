import { OnInit, Injectable } from '@angular/core';
// Models
import { ICategory } from './models/ICategory.model';

@Injectable()
export class StorageService implements OnInit {
  private _categories: ICategory[];
  private _categoryNames: string[];

  get categories(): ICategory[] {
   return this._categories.sort( (c1, c2) => c1.name.localeCompare(c2.name));
  }

  get categoryNames(): string[] {
    return this._categoryNames;
  }

  constructor() {
    // TODO: Retrieve data from backend
    this._categories = [
      {
        id: '52db8234-5fc3-4f91-b93a-a89e067a396a',
        name: 'Фрукты',
        imgPath: 'http://sashabrownfitness.com/wp-content/uploads/2015/01/27141301.jpg'
      },
      {
        id: 'a22ff738-c748-43a2-88e5-b838f43f5445',
        name: 'Овощи',
        imgPath: 'http://www.molbulak.ru/upload/iblock/b47/b47f74e863b00255ab9c63d24acc553b.jpg'
      },
      {
        id: '96b5d872-e0c4-4548-8f2e-aea090c33ac3',
        name: 'Молочные продукты',
        imgPath: 'https://fizcult.by/uploads/images/articles/615/original/as8lG2MS8ohCJ87d.jpg'
      },
      {
        id: '7767a797-4e3e-4637-a2f4-bb855daf77db',
        name: 'Бытовая техника',
        imgPath: 'https://tehnika-sech.ru/ssl/u/pic/58/0d5d3eb17911e6992fab3167067513/-/57b37c238fa07.jpg'
      },
      {
        id: '19639189-7fb6-4ab1-98f4-6b8ee6c1c3d6',
        name: 'Автозапчасти',
        imgPath: 'http://ua-vestnik.com/wp-content/uploads/2017/08/25cfaf66ee16408e7c66b5c2f49a7d45.jpg'
      },
      {
        id: '2205508b-2d35-4dc9-8b9a-5078d92e26de',
        name: 'Аудиотехника',
        imgPath: 'http://files.tovaroved.info/muzykalnyj-centr.jpg'
      },
      {
        id: 'd7a39932-e57d-47ed-866a-02f9eea26a90',
        name: 'Видеоигры',
        imgPath: 'https://alogvinov.com/wp-content/uploads/2016/12/maxresdefault-3-805x453.jpg'
      },
      {
        id: 'd406f9ec-ff70-40d3-a3f9-18bc30a912df',
        name: 'Оптические приборы',
        imgPath: 'http://www.podarkoff.com.ua/resources/images/cats_pics/optics.jpg'
      },
      {
        id: '92fe75bc-525a-414a-8e5f-e5a1d0cb4f21',
        name: 'Манипуляторы и устройства ввода',
        imgPath: 'https://www.syl.ru/misc/i/ai/166363/614568.jpg'
      },
      {
        id: 'be2b77c6-0fb5-4ff4-b185-cfafc5cc04c5',
        name: 'Инструменты',
        imgPath: 'http://автоград21.рф/images/ruchnoj-instrument1.jpg'
      },
      {
        id: '651e56b5-e61c-4ee1-a8e4-1c22f470c6a7',
        name: 'Сантехника',
        imgPath: 'http://www.fainaidea.com/wp-content/uploads/2015/10/Block2.png'
      },
      {
        id: 'e366e6d7-d3d5-4643-940b-ec7215ccb47f',
        name: 'Сетевое оборудование',
        imgPath: 'http://сервисшоп.рф/wa-data/public/shop/img/602219_v01_b.jpg'
      },
      {
        id: 'bc3e6718-47f0-4d3c-a5d7-fa90759b6f1e',
        name: 'Строительные материалы',
        imgPath: 'http://moodle.ask-bru.by/pluginfile.php/16/course/summary/sm.jpg'
      },
    ];

    this._createCategoryNamesList();
  }

  ngOnInit() {
  }

  private _createCategoryNamesList() {
    this._categoryNames = [];
    this.categories.forEach(i => {
      this._categoryNames.push(i.name);
    });
  }

  addCategory(category: ICategory) {
    category.id = Math.random().toString();
    this._categories.push(category);
  }
}
