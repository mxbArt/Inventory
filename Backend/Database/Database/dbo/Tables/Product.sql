CREATE TABLE [dbo].[Product]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT newid(), 
    [ProducerId] UNIQUEIDENTIFIER NOT NULL, 
    [CategoryId] UNIQUEIDENTIFIER NOT NULL, 
    [Name] NVARCHAR(MAX) NOT NULL, 
    CONSTRAINT [FK_Product_ToProducer] FOREIGN KEY (ProducerId) REFERENCES Producer(Id), 
    CONSTRAINT [FK_Product_ToCategoryId] FOREIGN KEY (CategoryId) REFERENCES CategoryItem(Id) 
)
