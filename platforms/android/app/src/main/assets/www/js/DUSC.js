var NPC = {
    DHinsert: function (options, callback) {
        function txtFunction(txt) {
            var sql = "INSERT INTO npc(AddFullName, raceId, gender, npcClass, hp, str, dex, con, int, wis, cha, description) " +
                "VALUES(?,?,?,?,?,?,?,?,?,?,?,?);";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Success: Insert transaction successful");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    },
    DHupdate: function (options, callback) {
        function txtFunction(txt) {
            var sql = "UPDATE npc SET AddFullName=?, raceId=?, gender=?, npcClass=?, hp=?, str=?, dex=?, con=?, int=?, wis=?, cha=?, description=? WHERE id=?;";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Success: Update transaction successful");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    },
    DHdelete: function (options, callback) {
        function txtFunction(txt) {
            var sql = "DELETE FROM npc WHERE id=?;";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Success: Delete transaction successful");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    },
    DHselect: function (options, callback) {
        function txtFunction(txt) {
            var sql = "SELECT * FROM npc WHERE id= ?;";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Success: Select transaction successful");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    },
    DHselectAll: function (options, callback) {
        function txtFunction(txt) {
            var sql = "SELECT * FROM npc;";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Success: Select All transaction successful");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    }
};

var Race = {
    DHselectAll: function (options, callback) {
        function txtFunction(txt) {
            var sql = "SELECT * FROM race;";
            txt.executeSql(sql, options, callback, errorHandle);
        }

        function successTransaction() {
            console.info("Success: Select All transaction successful");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    }
};