var database;

function errorHandle(txt, error) {
    console.error("SQL error: " + txt + "(" + error.code + "): " + error.message);
}

var Database = {
    CreateDatabase: function () {
        var shortName = "ExpenseTrackerDB";
        var version = "1.0";
        var displayName = "database for tracking expenses";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating database...");
        database = openDatabase(shortName, version, displayName, dbSize, dbCreationSuccess);

        function dbCreationSuccess() {
            console.info("Successfully Created Database");
        }
    },
    CreateTables: function () {
        function txtFunction(txt) {
            //dropping table
            console.info("Dropping table: Category");

            var sql = "DROP TABLE IF EXISTS Category;";

            var options = [];

            function successDropCategory() {
                console.info("tabled dropped!");
            }

            txt.executeSql(sql, options, successDropCategory, errorHandle)


            //create table
            console.info("Creating tables, please hold...");
            sql = "CREATE TABLE IF NOT EXISTS Category("
                + "CategoryID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "CategoryName VARCHAR(20) NOT NULL);";


            function successCreateCategory() {
                console.info("Created Category Table");
            }

            txt.executeSql(sql, options, successCreateCategory, errorHandle);
            //insert values into category table
            var categories = ["House", "Car", "Medical", "Leisure", "Education"];

            function successInsertCategory(category) {
                console.info(`Successfully inserted category ${category}`);
            }

            categories.forEach(function (category) {
                sql = `INSERT INTO Category(CategoryName) VALUES("${category}");`;
                txt.executeSql(sql, options, successInsertCategory(category), errorHandle)
            });

            //create expense table

            sql = "CREATE TABLE IF NOT EXISTS Expense( " +
                "ExpenseID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "ExpenseName VARCHAR(50) NOT NULL," +
                "Cost DECIMAL NOT NULL," +
                "CategoryID INTEGER NOT NULL);"             

            function successCreateExpense() {
                console.info("Created Expense Table");
            }

            txt.executeSql(sql, options, successCreateExpense, errorHandle);
        }

        function successTransaction() {
            console.info("successfully created tables");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    },

    DropTables: function () {
        //drop the tables
        function txtFunction(txt) {
            var sql = "DROP TABLE IF EXISTS Category;";
            var options = [];

            function successDropCategory() {
                console.info("Successfully dropped Category table");
            }

            txt.executeSql(sql, options, successDropCategory, errorHandle);

            sql = "DROP TABLE IF EXISTS Expense;";


            function successDropExpense() {
                console.info("Successfully dropped Expense table");
            }

            txt.executeSql(sql, options, successDropExpense, errorHandle);
        }

        function successTransaction() {
            console.info("Successfully dropped tables");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    }

}