var Expense = {
    Insert: function (options, callback) {
        function txtFunction(txt) {
            var sql = "INSERT INTO Expense(ExpenseName, Cost, CategoryID) " +
                "VALUES(?,?,?);";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Successfully inserted expense");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    },
    Delete: function (options, callback) {
        function txtFunction(txt) {
            var sql = "DELETE FROM Expense WHERE ExpenseID=?;";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Successfully deleted expense");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    },
    Select: function (options, callback) {
        function txtFunction(txt) {
            var sql = "SELECT * FROM Expense WHERE ExpenseID=?;";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Successfully selected expense");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    },
    SelectAll: function (options, callback) {
        function txtFunction(txt) {
            var sql = "SELECT * FROM Expense;";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Successfully selected expenses");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    }
};

var Category = {
    SelectAll: function (options, callback) {
        function txtFunction(txt) {
            var sql = "SELECT * FROM Category;";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Successfully populated dropdown");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    },
    Select: function (options, callback) {
        function txtFunction(txt) {
            var sql = "SELECT * FROM Category WHERE CategoryID=?;";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Successfully selected category");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    }
};