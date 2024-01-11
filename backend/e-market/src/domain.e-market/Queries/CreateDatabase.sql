USE master;

IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'E-Market')
BEGIN
    CREATE DATABASE [E-Market]
END