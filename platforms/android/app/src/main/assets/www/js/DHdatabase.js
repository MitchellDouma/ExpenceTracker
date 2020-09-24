var database;

function errorHandle(txt, error) {
    console.error("SQL error: " + txt + "(" + error.code + "): " + error.message);
}

var Database = {
    DHCreatDatabase: function () {
        var shortName = "DHFeedBackDB";
        var version = "1.0";
        var displayName = "database for DHFeedBack app";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating database...race");
        database = openDatabase(shortName, version, displayName, dbSize, dbCreationSuccess);

        function dbCreationSuccess() {
            console.info("Success database created: race");
        }
    },
    DHcreateTables: function () {
        function txtFunction(txt) {
            //dropping table
            console.info("dropping table: race");

            var sql = "DROP TABLE IF EXISTS race;";

            var options = [];

            function successDropRace() {
                console.info("tabled dropped!");
            }

            txt.executeSql(sql, options, successDropRace, errorHandle)


            //create table
            console.info("creating tables, please hold...");
            sql = "CREATE TABLE IF NOT EXISTS race("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";


            function successCreateRace() {
                console.info("Table, race created!");
            }

            txt.executeSql(sql, options, successCreateRace, errorHandle);

            var raceContent = ["Aarakocra", "Aasimar", "Bug Bear", "Changeling","Centaur","Dwarf","Dragonborn"
            ,"Eladrin","Elf","Genasi","Goliath", "Gnome", "Gith", "Goblin","Grung","Half Elf","Half Orc"
            ,"Halfling","Hobgoblin","Human","Kenku","Kobold","Kalashtar","Lizardfolk","Loxodon"
            ,"Minotaur","Orc","Shifter","Tabaxi","Triton","Tiefling","Tortle","Vedalken","Warforged","Yuan-Ti Pureblood"];

            function successInsertRace(race) {
                console.info(`Success: inserted race ${race}`);
            }

            raceContent.forEach(function (race) {
                sql = `INSERT INTO race(name) VALUES("${race}");`;
                txt.executeSql(sql, options, successInsertRace(race), errorHandle)
            });

            //create npc table

            sql = "CREATE TABLE IF NOT EXISTS npc( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "AddFullName VARCHAR(30) NOT NULL," +
                "raceId INTEGER NOT NULL," +
                "gender TEXT," +
                "npcClass TEXT,"+
                "hp INTEGER,"+
                "str INTEGER,"+
                "dex INTEGER,"+
                "con INTEGER,"+
                "int INTEGER,"+
                "wis INTEGER,"+
                "cha INTEGER,"+
                "description TEXT," +
                "FOREIGN KEY(raceId) REFERENCES race(id));";

            function successCreatedNpc() {
                console.info(`Successfully created NPC table`);
            }

            txt.executeSql(sql, options, successCreatedNpc, errorHandle);
        }

        function successTransaction() {
            console.info("successfully crated transaction table!");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    },

    DHdropTables: function () {
        //drop the tables
        function txtFunction(txt) {
            var sql = "DROP TABLE IF EXISTS race;";
            var options = [];

            function successDropRace() {
                console.info("Success: race table dropped successfully");
            }

            txt.executeSql(sql, options, successDropRace, errorHandle);

            sql = "DROP TABLE IF EXISTS npc;";


            function successDropNpc() {
                console.info("Success: npc table dropped successfully");
            }

            txt.executeSql(sql, options, successDropNpc, errorHandle);
        }

        function successTransaction() {
            console.info("Success: Drop tables transaction successful");
        }

        database.transaction(txtFunction, errorHandle, successTransaction);
    }

}