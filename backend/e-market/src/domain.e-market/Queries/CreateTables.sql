IF EXISTS (SELECT name FROM sys.databases WHERE name = 'E-Market')
BEGIN    
    USE [E-Market]

    IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Product')
    BEGIN
        CREATE TABLE Product (
            Id INT IDENTITY(1,1) PRIMARY KEY,
            Name NVARCHAR(255) UNIQUE NOT NULL,
            Price DECIMAL(18, 2) NOT NULL,
            Description NVARCHAR(MAX)
        )
    END

    IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Stock')
    BEGIN
        CREATE TABLE Stock (
            Id INT IDENTITY(1,1) PRIMARY KEY,
            Description NVARCHAR(255) NOT NULL,
            Quantity INT NOT NULL,
            ProductId INT,
            FOREIGN KEY (ProductId) REFERENCES Product(Id),
            UNIQUE (ProductId)
        )
    END
END