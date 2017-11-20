﻿CREATE TABLE [dbo].[Category]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT newid(), 
    [Name] NVARCHAR(100) NOT NULL, 
    [ImgPath] NVARCHAR(MAX) NULL
)
