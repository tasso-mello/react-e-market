using domain.e_market.Queries;
using Microsoft.Data.SqlClient;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace api.e_market.Core.Database;

public class DbSeed
{
    internal static void AddDatabase(string connection)
        => CreateDataBase(connection);

    internal static void AddTables(string connection)
        => CreateTables(connection);

    private static void CreateDataBase(string connection)
    {
        var myConn = new SqlConnection(connection);

        SqlCommand myCommand = new SqlCommand(Queries.CreateDatabase(), myConn);

        myConn.Open();
        myCommand.ExecuteNonQuery();
        myConn.Close();
    }

    private static void CreateTables(string connection)
    {
        var myConn = new SqlConnection(connection);

        SqlCommand myCommand = new SqlCommand(Queries.CreateTables(), myConn);

        myConn.Open();
        myCommand.ExecuteNonQuery();
        myConn.Close();
    }

}