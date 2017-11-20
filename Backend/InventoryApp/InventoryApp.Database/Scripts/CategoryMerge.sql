merge Category as target
using (values 
		('29598317-3d6f-4417-b63b-4bf86097e48e',  N'Фрукты', N'http://sashabrownfitness.com/wp-content/uploads/2015/01/27141301.jpg'),
		('c3ce1c2a-1c72-48c1-b92d-fe26635aae58',  N'Овощи', N'http://www.molbulak.ru/upload/iblock/b47/b47f74e863b00255ab9c63d24acc553b.jpg'),
		('c82a1cb2-0d37-45e2-8c91-d3e095db440e',  N'Молочные продукты', N'https://fizcult.by/uploads/images/articles/615/original/as8lG2MS8ohCJ87d.jpg'),
		('5e249201-dc9d-4386-8822-042a636233f7',  N'Бытовая техника', N'https://tehnika-sech.ru/ssl/u/pic/58/0d5d3eb17911e6992fab3167067513/-/57b37c238fa07.jpg'),
		('8bca5cdc-6f05-42a1-9145-ccc1b2d86fc1',  N'Автозапчасти', N'http://ua-vestnik.com/wp-content/uploads/2017/08/25cfaf66ee16408e7c66b5c2f49a7d45.jpg'),
		('d0998cf2-c1f4-4c60-93e5-28675d85b693',  N'Аудиотехника', N'http://files.tovaroved.info/muzykalnyj-centr.jpg'),
		('2c82b4d7-7de2-419d-99dc-27abb85999d5',  N'Оптические приборы', N'http://www.podarkoff.com.ua/resources/images/cats_pics/optics.jpg'),
		('f27fe708-8e32-4b9c-8453-7dbd28c3f9f6',  N'Устройства ввода', N'https://www.syl.ru/misc/i/ai/166363/614568.jpg'),
		('5913b102-2305-40d7-acec-70ce8224788a',  N'Инструменты', N'http://автоград21.рф/images/ruchnoj-instrument1.jpg'),
		('c653fb19-a081-442e-9308-9aa1da52ac5c',  N'Сантехника', N'http://liding-c.com/wp-content/uploads/2013/08/santehnika-na-liding-c.com_.jpg')
	  ) as Source (Id, Name, ImgPath)
on target.Id = Source.Id
when matched then 
	Update set 
		target.Name = Source.Name,
		target.ImgPath = Source.ImgPath
when not matched then
	Insert (Id, Name, ImgPath) values (Source.Id, Source.Name, Source.ImgPath);