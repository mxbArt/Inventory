﻿CREATE TABLE [dbo].[ProductLog]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT newid(), 
    [ProductId] UNIQUEIDENTIFIER NOT NULL, 
    [UserId] UNIQUEIDENTIFIER NOT NULL, 
    [Date] DATETIME NOT NULL, 
    [Count] FLOAT NOT NULL, 
    CONSTRAINT [FK_ProductLog_ToProduct] FOREIGN KEY ([ProductId]) REFERENCES [Product]([Id]), 
    CONSTRAINT [FK_ProductLog_ToUser] FOREIGN KEY ([UserId]) REFERENCES [User]([Id])
)