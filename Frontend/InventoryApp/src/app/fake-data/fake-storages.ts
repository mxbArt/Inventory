// Interfaces
import { IStorage } from '../core/models/IStorage.model';
import { IProduct } from '../core/models/IProduct.model';

let fakeStorages: Array<IStorage> = [
  {
    id: '6358b540-8f24-4300-915d-5afcb6abd11d',
    imagePath: './assets/images/temp/fake-storage-img.jpg',
    adress: 'г. Кез, ул. Беговая 3-я',
    products: [
      {
        id: 'bf5f0520-d564-46cc-a3f3-daafe12507cc',
        name: 'молоко 1.5%',
        count: 25
      },
      {
        id: 'c4b717c2-bff7-420a-9566-d89bf3bf1027',
        name: 'молоко 2.5%',
        count: 10
      },
      {
        id: '70e68418-a4c9-4c9b-94d8-c0e0a95e1a61',
        name: 'кефир 4%',
        count: 15
      },
      {
        id: 'b3d723eb-e176-4b44-bc36-bfecb373e3c9',
        name: 'чай Lipton зеленый',
        count: 20
      },
    ]
  },
  {
    id: '4ea3e807-e5c2-4690-b675-a8fbed97a7aa',
    imagePath: './assets/images/temp/fake-storage-img.jpg',
    adress: 'г. Верховье, ул. Баженова',
    products: [
      {
        id: 'd73d5712-fc3c-45bb-8e84-6d56968f240c',
        name: 'молоко 1.5%',
        count: 5
      },
      {
        id: '899b4453-eb31-4022-9388-68b12d8d2e8c',
        name: 'Xiaomi Redmi 4X',
        count: 10
      },
      {
        id: '9f0fd196-850b-44f9-a2d0-30ac803672d7',
        name: 'помидоры',
        count: 15
      },
      {
        id: '219a5ca2-0b2f-4b17-9ee3-b74a371082b4',
        name: 'цветная капуста',
        count: 20
      },
    ]
  },
  {
    id: 'd3a3d249-80b3-4b44-807a-fa93d8740d66',
    imagePath: './assets/images/temp/fake-storage-img.jpg',
    adress: 'г. Наровчат, ул. Байдукова',
    products: [
      {
        id: '7fb06437-0ee3-4e41-94ce-e5c225e7e7cb',
        name: 'Apple iPhone 5s',
        count: 1
      },
      {
        id: '0430fece-ee36-4324-8b68-8c6f90b85fe1',
        name: 'Xiaomi Redmi 4X',
        count: 5
      },
      {
        id: '591d8d0d-b66b-4ab5-b00c-b3a2ed369821',
        name: 'ноутбук Lenovo',
        count: 5
      }
    ]
  },
  {
    id: '7bbc3988-8a0c-4a99-a21e-7aa8c8ad21b8',
    imagePath: './assets/images/temp/fake-storage-img.jpg',
    adress: 'г. Старая Полтавка, ул. Беговая 3-я',
    products: [
      {
        id: '250a2e30-e0e9-4220-af21-eb6cea690d30',
        name: 'цветная капуста',
        count: 50
      },
      {
        id: 'dba51291-494a-4a42-9641-a50bb96fc32c',
        name: 'помидоры',
        count: 55
      },
      {
        id: '0dabc424-fb90-41df-9fe2-ef71d41b4a59',
        name: 'апельсины',
        count: 40
      }
    ]
  },

  {
    id: '6358b540-8f24-4300-915d-5afcb6abd11d',
    imagePath: './assets/images/temp/fake-storage-img.jpg',
    adress: 'г. Кез, ул. Беговая 3-я',
    products: [
      {
        id: '872ed00c-8828-428d-b154-aa354016bb6d',
        name: 'молоко 1.5%',
        count: 25
      },
      {
        id: '3689657c-f934-4f6a-af96-0b00db41a7a3',
        name: 'молоко 2.5%',
        count: 20
      },
      {
        id: 'a6050348-c3ff-4594-8010-7e67d3b514a9',
        name: 'кефир 4%',
        count: 40
      }
    ]
  },
  {
    id: '4ea3e807-e5c2-4690-b675-a8fbed97a7aa',
    imagePath: './assets/images/temp/fake-storage-img.jpg',
    adress: 'г. Верховье, ул. Баженова',
    products: [
      {
        id: '236b5714-30f0-4180-8b07-a01b22198f45',
        name: 'чай Lipton зеленый',
        count: 25
      },
      {
        id: '5ddccea9-1fdb-4a4e-b1c8-bbbe909362af',
        name: 'Apple iPhone 5s',
        count: 20
      },
      {
        id: 'a0c4da77-1d3b-44ea-94f1-8a17ce3c3b31',
        name: 'ноутбук Lenovo',
        count: 40
      },
      {
        id: '3bf00a0a-f1d7-4093-9656-50cf31fc733f',
        name: 'Xiaomi Redmi 4X',
        count: 1
      },
      {
        id: '18aae8b8-2844-4416-92d4-6147c33fee30',
        name: 'апельсины',
        count: 10
      }
    ]
  },
  {
    id: 'd3a3d249-80b3-4b44-807a-fa93d8740d66',
    imagePath: './assets/images/temp/fake-storage-img.jpg',
    adress: 'г. Наровчат, ул. Байдукова',
    products: [
      {
        id: 'e5a7eeae-031d-442a-89a2-e24f98a2adc4',
        name: 'молоко 1.5%',
        count: 10
      },
      {
        id: 'c66982c1-7737-49a2-88f1-6e628c6ba699',
        name: 'молоко 2.5%',
        count: 8
      },
      {
        id: 'f5d7c534-d8df-4a13-b437-3292e370fa78',
        name: 'кефир 4%',
        count: 5
      },
      {
        id: '58d6b5a3-f8d0-4d98-99ed-d76ddcc48c1e',
        name: 'чай Lipton зеленый',
        count: 1
      },
    ]
  },
  {
    id: '7bbc3988-8a0c-4a99-a21e-7aa8c8ad21b8',
    imagePath: './assets/images/temp/fake-storage-img.jpg',
    adress: 'г. Старая Полтавка, ул. Беговая 3-я',
    products: [
      {
        id: 'fac17f6c-6c05-43d0-9574-6ad7fb137aec',
        name: 'молоко 1.5%',
        count: 1
      },
      {
        id: '4e1d5595-8d9c-4439-8f04-4b42c7332150',
        name: 'молоко 2.5%',
        count: 2
      },
      {
        id: '8f3d84b8-c708-4a09-989f-999c38d278db',
        name: 'кефир 4%',
        count: 3
      },
      {
        id: 'd7dca8be-1ccc-4aa3-8da5-4631b5f7091a',
        name: 'чай Lipton зеленый',
        count: 4
      },
    ]
  }
];

export default fakeStorages;
