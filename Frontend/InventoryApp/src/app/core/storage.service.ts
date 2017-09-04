import { OnInit, Injectable } from '@angular/core';
// Models
import { ICategory } from './models/ICategory.model';
import { IWaybillItem } from './models/IWaybillItem.model';
import { IProduct } from './models/IProduct.model';
// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StorageService implements OnInit {
  private _categories: ICategory[];
  private _categoryNames: string[];
  categoryChanged: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  get categories(): ICategory[] {
    return this._categories.sort((c1, c2) => c1.name.localeCompare(c2.name));
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
        products: [
          {
            id: Math.random().toString(),
            name: 'Апельсин',
            count: 40,
            imgPath: 'http://polza-vred.su/wp-content/uploads/2016/03/apel.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Виноград',
            count: 20,
            imgPath: 'http://okeydoc.ru/wp-content/uploads/2015/12/grapes_variety_sweet_fruit_70303_3840x2400.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Мандарин',
            count: 10,
            imgPath: 'http://www.fresher.ru/manager_content/12-2015/mandariny-vidy-vkus-polza-i-tonkosti-vybora/1.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Ананас',
            count: 40,
            imgPath: 'http://medvoice.ru/wp-content/uploads/2016/07/ananas.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Груша',
            count: 10,
            imgPath: 'https://www.greenplanet.pro/upload/iblock/3b8/3b8721909e08592341b47c6b31bfdbed.jpg'
          },
        ],
        imgPath: 'http://sashabrownfitness.com/wp-content/uploads/2015/01/27141301.jpg'
      },
      {
        id: 'a22ff738-c748-43a2-88e5-b838f43f5445',
        name: 'Овощи',
        products: [
          {
            id: Math.random().toString(),
            name: 'Капуста',
            count: 0,
            imgPath: 'http://edaplus.info/food_pictures/brussels_sprouts.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Картошка',
            count: 0,
            imgPath: 'http://www.vokrugsada.ru/wp-content/uploads/kartoshka.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Помидор',
            count: 40,
            imgPath: 'https://images.lady.mail.ru/456339/'
          },
          {
            id: Math.random().toString(),
            name: 'Огурец',
            count: 40,
            imgPath: 'http://www.1000listnik.ru/wp-content/uploads/2016/03/56e1411715e62.jpeg'
          },
          {
            id: Math.random().toString(),
            name: 'Перец',
            count: 10,
            imgPath: 'http://megaogorod.com/files/styles/imginarticlebig/public/field/image/u2169/111_19.jpg?itok=39JIhwPW'
          },
        ],
        imgPath: 'http://www.molbulak.ru/upload/iblock/b47/b47f74e863b00255ab9c63d24acc553b.jpg'
      },
      {
        id: '96b5d872-e0c4-4548-8f2e-aea090c33ac3',
        name: 'Молочные продукты',
        products: [
          {
            id: Math.random().toString(),
            name: 'Молоко',
            count: 50,
            imgPath: 'http://mojzheludok.com/wp-content/uploads/2015/12/Moloko-ot-izzhogi.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Кефир',
            count: 10,
            imgPath: 'http://irecommend.ru/sites/default/files/product-images/42696/kefir_group_01-2013.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Сыр',
            count: 11,
            imgPath: 'https://mamapedia.com.ua/UploadImages/tverdyi-syr.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Творог',
            count: 7,
            imgPath: 'http://notefood.ru/wp-content/uploads/2016/02/domashnij-tvorog.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Сметана',
            count: 8,
            imgPath: 'http://polza-vred.su/wp-content/uploads/2016/09/maski-smetana-foto-02.jpg'
          },
        ],
        imgPath: 'https://fizcult.by/uploads/images/articles/615/original/as8lG2MS8ohCJ87d.jpg'
      },
      {
        id: '7767a797-4e3e-4637-a2f4-bb855daf77db',
        name: 'Бытовая техника',
        products: [
          {
            id: Math.random().toString(),
            name: 'Стиральные машины',
            count: 1,
            imgPath: 'http://www.ryazan-stroyka.ru/materials/technika/07_stiralniemashinyvryazani/images/02.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Микроволновки',
            count: 2,
            imgPath: 'http://beregite-zdorovje.ru/uploads/dolzen_znat_kazduj/mikrovolnovka.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Холодильники',
            count: 40,
            imgPath: 'http://tehnika.vyborkuhni.ru/wp-content/uploads/2014/10/obzor_modelej_xolodilnikov_libxer_01.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Миксеры',
            count: 50,
            imgPath: 'https://i2.rozetka.ua/goods/1547521/vitek-vt-1403-w_images_1547521025.jpg'
          },
        ],
        imgPath: 'https://tehnika-sech.ru/ssl/u/pic/58/0d5d3eb17911e6992fab3167067513/-/57b37c238fa07.jpg'
      },
      {
        id: '19639189-7fb6-4ab1-98f4-6b8ee6c1c3d6',
        name: 'Автозапчасти',
        products: [
          {
            id: Math.random().toString(),
            name: 'Фильтры',
            count: 1,
            imgPath: 'https://ua.all.biz/img/ua/catalog/430244.jpeg'
          },
          {
            id: Math.random().toString(),
            name: 'Свечи',
            count: 50,
            imgPath: 'http://tire1.ru/wp-content/uploads/2017/04/mnogoelektrodnaya-svecha.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Тормоза',
            count: 10,
            imgPath: 'http://ustroistvo-avtomobilya.ru/wp-content/uploads/2012/11/Tormoza.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Фары',
            count: 2,
            imgPath: 'http://моторов.рф/_upload/images/fara2,_motorov.jpg'
          },
        ],
        imgPath: 'http://ua-vestnik.com/wp-content/uploads/2017/08/25cfaf66ee16408e7c66b5c2f49a7d45.jpg'
      },
      {
        id: '2205508b-2d35-4dc9-8b9a-5078d92e26de',
        name: 'Аудиотехника',
        products: [
          {
            id: Math.random().toString(),
            name: 'Наушники',
            count: 10,
            imgPath: 'https://static.svyaznoy.ru/upload/iblock/e48/4151168.jpg/resize/307x224/'
          },
          {
            id: Math.random().toString(),
            name: 'Колонки',
            count: 9,
            imgPath: 'http://it-m.by/images/kak_vybrat/kak-vybrat-kolonki-1.jpg',
          },
        ],
        imgPath: 'http://files.tovaroved.info/muzykalnyj-centr.jpg'
      },
      {
        id: 'd406f9ec-ff70-40d3-a3f9-18bc30a912df',
        name: 'Оптические приборы',
        products: [
          {
            id: Math.random().toString(),
            name: 'Бинокли',
            count: 5,
            imgPath: 'https://cdn.4glaza.ru/images/products/large/0/binoculars-levenhuk-atom-10-30x50.jpg'
          }
        ],
        imgPath: 'http://www.podarkoff.com.ua/resources/images/cats_pics/optics.jpg'
      },
      {
        id: '92fe75bc-525a-414a-8e5f-e5a1d0cb4f21',
        name: 'Манипуляторы и устройства ввода',
        products: [
          {
            id: Math.random().toString(),
            name: 'Геймпады',
            count: 5,
            imgPath: 'http://hotline.ua/img/tx/202/20266385.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Клавиатуры',
            count: 51,
            imgPath: 'https://www.osp.ru/FileStorage/DOCUMENTS_ILLUSTRATIONS/13193397/original.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Мышки',
            count: 15,
            imgPath: 'http://vse-sekrety.ru/uploads/posts/2014-07/1406824553_mouse-01.jpg'
          },
        ],
        imgPath: 'https://www.syl.ru/misc/i/ai/166363/614568.jpg'
      },
      {
        id: 'be2b77c6-0fb5-4ff4-b185-cfafc5cc04c5',
        name: 'Инструменты',
        products: [
          {
            id: Math.random().toString(),
            name: 'Отвертки',
            count: 8,
            imgPath: 'http://www.tehnotools.com/upload/medialibrary/76c/76cc806ff6f86383488aedc17f875488.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Ключи',
            count: 59,
            imgPath: 'http://www.emomi.com/gaechnyj-kljuch-kombinirovannyj-nabor-1.jpeg'
          }
        ],
        imgPath: 'http://автоград21.рф/images/ruchnoj-instrument1.jpg'
      },
      {
        id: '651e56b5-e61c-4ee1-a8e4-1c22f470c6a7',
        name: 'Сантехника',
        products: [
          {
            id: Math.random().toString(),
            name: 'Трубы',
            count: 0,
            imgPath: 'http://santekhvl.ru/wp-content/uploads/2014/05/vodoprovodnye_truby_iz_plastika.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Краны',
            count: 0,
            imgPath: 'http://gidroguru.com/wp-content/uploads/segodnya-naibolee-rasprostraneny-odnorychazhnye-modeli.jpg'
          }
        ],
        imgPath: 'http://liding-c.com/wp-content/uploads/2013/08/santehnika-na-liding-c.com_.jpg'
      },
      {
        id: 'bc3e6718-47f0-4d3c-a5d7-fa90759b6f1e',
        name: 'Строительные материалы',
        products: [
          {
            id: Math.random().toString(),
            name: 'Цемент',
            count: 10,
            imgPath: 'http://tdmetallukraine.com/wp-content/uploads/2012/12/6.gif'
          },
          {
            id: Math.random().toString(),
            name: 'Кирпичи',
            count: 6,
            imgPath: 'http://chelkon.ru/wp-content/uploads/2015/09/111.jpg'
          },
          {
            id: Math.random().toString(),
            name: 'Доски',
            count: 511,
            imgPath: 'http://pol-master.com/wp-content/uploads/2013/05/Gotovim_doski_dlya_pola1-400x315.jpg'
          }
        ],
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
    this._createCategoryNamesList();
    this.categoryChanged.next(this._categoryNames);
  }

  getCategory(id: string): ICategory {
    return this._categories.find(c => c.id === id);
  }

  getProducts(categoryId: string): IProduct[] {
    return this.getCategory(categoryId).products;
  }
}
