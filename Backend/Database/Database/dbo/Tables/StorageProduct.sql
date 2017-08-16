CREATE TABLE [dbo].[StorageProduct]
(
	[StorageId] UNIQUEIDENTIFIER NOT NULL , 
    [ProductId] UNIQUEIDENTIFIER NOT NULL, 
    CONSTRAINT [FK_StorageProduct_ToStorage] FOREIGN KEY (StorageId) REFERENCES Storage(Id), 
    CONSTRAINT [FK_StorageProduct_ToProduct] FOREIGN KEY (ProductId) REFERENCES Product(Id), 
    PRIMARY KEY ([StorageId], [ProductId]) 
)
