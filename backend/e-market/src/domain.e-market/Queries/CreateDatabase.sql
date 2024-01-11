USE master;

IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'E-Market')
BEGIN
    CREATE DATABASE [E-Market]
END


IF NOT EXISTS (SELECT 1 FROM sys.server_principals WHERE name = 'e-market')
BEGIN
    CREATE LOGIN [e-market] WITH PASSWORD=N'jZBMGg+XwNSlPkPeqH7XMR/RzpCYeilPG4DnbojPmtI=', DEFAULT_DATABASE=[master], CHECK_EXPIRATION=ON, CHECK_POLICY=ON
    ALTER LOGIN [e-market] DISABLE
    ALTER SERVER ROLE [sysadmin] ADD MEMBER [e-market]
END