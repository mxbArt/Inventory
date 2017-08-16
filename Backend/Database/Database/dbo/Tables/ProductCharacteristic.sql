CREATE TABLE [dbo].[ProductCharacteristic]
(
	[ProductId] UNIQUEIDENTIFIER NOT NULL , 
    [CharacteristicId] UNIQUEIDENTIFIER NOT NULL, 
    [Value] NVARCHAR(MAX) NOT NULL, 
    CONSTRAINT [FK_ProductCharacteristic_ToCharacteristic] FOREIGN KEY (CharacteristicId) REFERENCES Characteristic(Id), 
    CONSTRAINT [FK_ProductCharacteristic_ToProduct] FOREIGN KEY (ProductId) REFERENCES Product(Id), 
    PRIMARY KEY ([CharacteristicId], [ProductId]) 
)
