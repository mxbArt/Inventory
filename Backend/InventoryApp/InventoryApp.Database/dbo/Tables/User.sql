﻿CREATE TABLE [dbo].[User]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT newid(), 
    [RoleId] UNIQUEIDENTIFIER NOT NULL, 
    [Email] NVARCHAR(100) NOT NULL, 
    [PasswordHash] NVARCHAR(MAX) NOT NULL, 
    CONSTRAINT [FK_User_ToRole] FOREIGN KEY ([RoleId]) REFERENCES [Role]([Id])
)
