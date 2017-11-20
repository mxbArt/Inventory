CREATE TABLE [dbo].[Product]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT newid(), 
    [CategoryId] UNIQUEIDENTIFIER NOT NULL, 
    [Name] NVARCHAR(100) NOT NULL, 
    [Count] INT NOT NULL, 
    [LastUpdate] DATETIME NOT NULL, 
    [Description] NVARCHAR(MAX) NULL, 
    [Measurment] NVARCHAR(50) NOT NULL, 
    [ImgPath] NVARCHAR(MAX) NULL, 
    CONSTRAINT [FK_Product_ToCategory] FOREIGN KEY ([CategoryId]) REFERENCES [Category]([Id])
)
