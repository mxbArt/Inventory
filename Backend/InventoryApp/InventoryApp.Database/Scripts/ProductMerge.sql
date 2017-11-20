merge Product as target
using (values 
        /*Fruits*/
		('3d762cc5-e4fc-47db-b01a-d5fa48cdd64c', '29598317-3d6f-4417-b63b-4bf86097e48e', N'Апельсин', 40, '2017-09-19T18:09:45', N'Апельсин — самая распространённая цитрусовая культура во всех тропических и субтропических областях мира.', N'кг.', 'http://polza-vred.su/wp-content/uploads/2016/03/apel.jpg'),
		('c9a990d7-c2ce-452b-b87e-10f988fe2e04', '29598317-3d6f-4417-b63b-4bf86097e48e', N'Виноград', 20, '2017-09-19T18:09:45', N'', N'кг.', 'http://okeydoc.ru/wp-content/uploads/2015/12/grapes_variety_sweet_fruit_70303_3840x2400.jpg'),
		('53715fea-7a10-41e5-94cf-fdaecfcf661c', '29598317-3d6f-4417-b63b-4bf86097e48e', N'Мандарин', 10, '2017-09-19T18:09:45', N'Многогнёздные и многосемянные, 4—6 см в диаметре; слегка сплюснуты от основания к верхушке, так что ширина их заметно больше высоты. Мандарины выделяются среди других цитрусов тем, что плоды имеют тонкую кожуру, которая легко отделяется от мякоти (у некоторых сортов кожура отделена от мякоти воздушным слоем и почти не касается последней).', N'кг.', 'http://www.fresher.ru/manager_content/12-2015/mandariny-vidy-vkus-polza-i-tonkosti-vybora/1.jpg'),
		('ba9429b1-9728-4668-bfc6-67a7bf6aafc4', '29598317-3d6f-4417-b63b-4bf86097e48e', N'Ананас', 40, '2017-09-19T18:09:45', N'', N'кг.', 'http://medvoice.ru/wp-content/uploads/2016/07/ananas.jpg'),
		('5bea3c5c-8101-4224-8306-a2a4bcb2f634', '29598317-3d6f-4417-b63b-4bf86097e48e', N'Груша', 10, '2017-09-19T18:09:45', N'', N'кг.', 'https://www.greenplanet.pro/upload/iblock/3b8/3b8721909e08592341b47c6b31bfdbed.jpg'),
        /*Vegetables*/
		('1f9e424c-505e-4d90-b6f1-6d932f94e6fb', 'c3ce1c2a-1c72-48c1-b92d-fe26635aae58', N'Капуста', 0, '2017-09-19T18:09:45', N'Двулетнее растение, сельскохозяйственная культура; вид рода Капуста семейства Капустные.', N'кг.', 'http://edaplus.info/food_pictures/brussels_sprouts.jpg'),
		('dd3dab5e-90a8-4900-b4f7-778489328caa', 'c3ce1c2a-1c72-48c1-b92d-fe26635aae58', N'Картошка', 0, '2017-09-19T18:09:45', N'', N'кг.', 'http://www.vokrugsada.ru/wp-content/uploads/kartoshka.jpg'),
		('765c710c-5be8-4ca5-a469-13abc4f91927', 'c3ce1c2a-1c72-48c1-b92d-fe26635aae58', N'Помидор', 40, '2017-09-19T18:09:45', N'', N'кг.', 'https://images.lady.mail.ru/456339/'),
		('da7029dc-ec2b-4cc1-a858-04c21f359487', 'c3ce1c2a-1c72-48c1-b92d-fe26635aae58', N'Огурец', 40, '2017-09-19T18:09:45', N'Огурец появился в культуре более 6 тысяч лет назад. Родина этого вида — тропические и субтропические районы Индии, подножия Гималаев, где он до сих пор растёт в естественных условиях. Упомянут в Библии как овощ Египта (Чис. 11:5). Эта культура была известна уже грекам, от которых перешла к римлянам, и в эпоху Карла Великого была распространена уже по Средней Европе. Первое упоминание об огурцах в Московском государстве было сделано германским послом Герберштейном в 1528 году в его записках о путешествии в Московию.', N'кг.', 'http://www.1000listnik.ru/wp-content/uploads/2016/03/56e1411715e62.jpeg'),
		('1c7aab5b-0cfc-49be-8071-68add79af8dc', 'c3ce1c2a-1c72-48c1-b92d-fe26635aae58', N'Перец', 10, '2017-09-19T18:09:45', N'', N'кг.', 'http://www.1000listnik.ru/wp-content/uploads/2016/03/56e1411715e62.jpeg'),
        /*Milk products*/
		('b0767f6e-3e6b-4609-8488-f1412ed9c71a', 'c82a1cb2-0d37-45e2-8c91-d3e095db440e', N'Молоко', 50, '2017-09-19T18:09:45', N'', N'л.', 'http://mojzheludok.com/wp-content/uploads/2015/12/Moloko-ot-izzhogi.jpg'),
		('40097667-f3ed-434c-bf0e-cdea66b6f4bb', 'c82a1cb2-0d37-45e2-8c91-d3e095db440e', N'Кефир', 10, '2017-09-19T18:09:45', N'', N'л.', 'http://irecommend.ru/sites/default/files/product-images/42696/kefir_group_01-2013.jpg'),
		('f245d60f-f5a5-4511-9c30-0a9a46ea5c2d', 'c82a1cb2-0d37-45e2-8c91-d3e095db440e', N'Сыр', 11, '2017-09-19T18:09:45', N'', N'кг.', 'https://mamapedia.com.ua/UploadImages/tverdyi-syr.jpg'),
		('e25090a3-883a-4ccf-87e2-1700628d82d2', 'c82a1cb2-0d37-45e2-8c91-d3e095db440e', N'Творог', 7, '2017-09-19T18:09:45', N'', N'кг.', 'http://notefood.ru/wp-content/uploads/2016/02/domashnij-tvorog.jpg'),
		('6096ef56-27a4-4c8a-b15e-50d6453c8813', 'c82a1cb2-0d37-45e2-8c91-d3e095db440e', N'Сметана', 7, '2017-09-19T18:09:45', N'', N'кг.', 'http://polza-vred.su/wp-content/uploads/2016/09/maski-smetana-foto-02.jpg'),
		/*Home technique*/
		('64382de0-5d03-419d-8150-c8bf590416ec', '5e249201-dc9d-4386-8822-042a636233f7', N'Стиральные машины', 1, '2017-09-19T18:09:45', N'', N'шт.', 'http://www.ryazan-stroyka.ru/materials/technika/07_stiralniemashinyvryazani/images/02.jpg'),
		('f8346e44-b66f-450a-8a4e-8688449c7211', '5e249201-dc9d-4386-8822-042a636233f7', N'Микроволновки', 2, '2017-09-19T18:09:45', N'', N'шт.', 'http://beregite-zdorovje.ru/uploads/dolzen_znat_kazduj/mikrovolnovka.jpg'),
		('f380217d-e474-46bf-99d8-9a4738bbbdb1', '5e249201-dc9d-4386-8822-042a636233f7', N'Холодильники', 5, '2017-09-19T18:09:45', N'', N'шт.', 'http://tehnika.vyborkuhni.ru/wp-content/uploads/2014/10/obzor_modelej_xolodilnikov_libxer_01.jpg'),
		('25bbe65c-7578-43f7-9bb9-6035ebe49690', '5e249201-dc9d-4386-8822-042a636233f7', N'Миксеры', 12, '2017-09-19T18:09:45', N'', N'шт.', 'https://i2.rozetka.ua/goods/1547521/vitek-vt-1403-w_images_1547521025.jpg'),
		/*Car parts*/
		('cf035e2f-04d1-4101-bdf3-0399aa909fd9', '8bca5cdc-6f05-42a1-9145-ccc1b2d86fc1', N'Фильтры', 1, '2017-09-19T18:09:45', N'', N'шт.', 'https://ua.all.biz/img/ua/catalog/430244.jpeg'),
		('299e5599-42d9-45d9-a0f9-7e4551279a85', '8bca5cdc-6f05-42a1-9145-ccc1b2d86fc1', N'Свечи', 51, '2017-09-19T18:09:45', N'', N'шт.', 'http://tire1.ru/wp-content/uploads/2017/04/mnogoelektrodnaya-svecha.jpg'),
		('e9404ac6-bde4-4643-9014-d9203a66ffd7', '8bca5cdc-6f05-42a1-9145-ccc1b2d86fc1', N'Тормоза', 10, '2017-09-19T18:09:45', N'', N'шт.', 'http://ustroistvo-avtomobilya.ru/wp-content/uploads/2012/11/Tormoza.jpg'),
		('e69eb69c-62ec-4021-9d2b-7bc56ac174db', '8bca5cdc-6f05-42a1-9145-ccc1b2d86fc1', N'Фары', 3, '2017-09-19T18:09:45', N'', N'шт.', 'http://моторов.рф/_upload/images/fara2,_motorov.jpg'),
		/*Audio*/
		('b235f5aa-21c8-4a5c-ae3b-00856bb45246', 'd0998cf2-c1f4-4c60-93e5-28675d85b693', N'Наушники', 10, '2017-09-19T18:09:45', N'', N'шт.', 'https://static.svyaznoy.ru/upload/iblock/e48/4151168.jpg/resize/307x224/'),
		('44afbc70-03de-4e13-a3b6-f9be903351c7', 'd0998cf2-c1f4-4c60-93e5-28675d85b693', N'Колонки', 9, '2017-09-19T18:09:45', N'', N'шт.', 'http://it-m.by/images/kak_vybrat/kak-vybrat-kolonki-1.jpg'),
		/*Optical devices*/
		('e5828047-5af2-435b-8522-7b5d1d9881d8', '2c82b4d7-7de2-419d-99dc-27abb85999d5', N'Бинокли', 5, '2017-09-19T18:09:45', N'', N'шт.', 'https://cdn.4glaza.ru/images/products/large/0/binoculars-levenhuk-atom-10-30x50.jpg'),
		/*Input devices*/
		('fa8cace9-6ae7-4193-9b6e-2f8c430326ae', 'f27fe708-8e32-4b9c-8453-7dbd28c3f9f6', N'Геймпады', 5, '2017-09-19T18:09:45', N'', N'шт.', 'http://hotline.ua/img/tx/202/20266385.jpg'),
		('5bb5fa9c-fe09-47a0-8168-a5f82fe567a3', 'f27fe708-8e32-4b9c-8453-7dbd28c3f9f6', N'Клавиатуры', 51, '2017-09-19T18:09:45', N'', N'шт.', 'https://www.osp.ru/FileStorage/DOCUMENTS_ILLUSTRATIONS/13193397/original.jpg'),
		('843971a2-0700-4976-9d52-e14cd65d1182', 'f27fe708-8e32-4b9c-8453-7dbd28c3f9f6', N'Мышки', 12, '2017-09-19T18:09:45', N'', N'шт.', 'http://vse-sekrety.ru/uploads/posts/2014-07/1406824553_mouse-01.jpg'),
		/**/
		('61385022-eee3-4fb4-805f-c9610a43dd27', '5913b102-2305-40d7-acec-70ce8224788a', N'Отвертки', 8, '2017-09-19T18:09:45', N'', N'шт.', 'http://www.tehnotools.com/upload/medialibrary/76c/76cc806ff6f86383488aedc17f875488.jpg'),
		('8c5de524-089b-434c-bb4c-d4db93e4c9c6', '5913b102-2305-40d7-acec-70ce8224788a', N'Ключи', 59, '2017-09-19T18:09:45', N'', N'шт.', 'http://www.emomi.com/gaechnyj-kljuch-kombinirovannyj-nabor-1.jpeg'),
		/**/
		('c1641434-c096-43d3-b0ca-8155f7b16801', 'c653fb19-a081-442e-9308-9aa1da52ac5c', N'Трубы', 0, '2017-09-19T18:09:45', N'', N'шт.', 'http://santekhvl.ru/wp-content/uploads/2014/05/vodoprovodnye_truby_iz_plastika.jpg'),
		('64e2733e-5a4c-4dc4-89af-7eb1a8bf0cb8', 'c653fb19-a081-442e-9308-9aa1da52ac5c', N'Краны', 1, '2017-09-19T18:09:45', N'', N'шт.', 'http://gidroguru.com/wp-content/uploads/segodnya-naibolee-rasprostraneny-odnorychazhnye-modeli.jpg')
	  ) as Source (Id, CategoryId, Name, Count, LastUpdate, Description, Measurment, ImgPath)
on target.Id = Source.Id
when matched then 
	Update set 
        target.CategoryId = Source.CategoryId,
		target.Name = Source.Name,
        target.Count = Source.Count,
        target.LastUpdate = Source.LastUpdate,
        target.Description = Source.Description,
        target.Measurment = Source.Measurment,
        target.ImgPath = Source.ImgPath
when not matched then
	Insert (Id, CategoryId, Name, Count, LastUpdate, Description, Measurment, ImgPath) 
        values (Source.Id, Source.CategoryId, Source.Name, Source.Count, Source.LastUpdate, Source.Description, Source.Measurment, Source.ImgPath);