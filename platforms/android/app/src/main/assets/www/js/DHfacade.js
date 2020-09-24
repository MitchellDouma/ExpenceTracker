$(document).ready(function () {

    function RaceDropdown() {
        var options = [];
        var select = document.getElementById("AddRace");

        function callback(txt, result) {

            for (var i = 0; i < result.rows.length; i++) {
                var row = result.rows[i];
                var list = document.createElement("option");
                list.textContent = row.name;
                list.value = row.id;

                select.appendChild(list);
            }
        }

        Race.DHselectAll(options, callback);
    }

    function EditRaceDropdown() {
        var options = [];
        var select = document.getElementById("ERace");

        function callback(txt, result) {

            for (var i = 0; i < result.rows.length; i++) {
                var row = result.rows[i];
                var list = document.createElement("option");
                list.textContent = row.name;
                list.value = row.id;

                select.appendChild(list);
            }
        }

        Race.DHselectAll(options, callback);
    }

    RaceDropdown();
    EditRaceDropdown();
})




function AddNpc() {

    //obtain information to add to npc database
    if(NpcValidation()){

        var AddFullName = $('#AddFullName').val();
        var race = $('#AddRace').val();
        var gender = $('#gender').val();
        var addClass = $('#AddClass').val();
        var hp = $('#hitPoints').val();
        var str = $('#str').val();
        var dex = $('#dex').val();
        var con = $('#con').val();
        var int = $('#int').val();
        var wis = $('#wis').val();
        var cha = $('#cha').val();
        var description = $('#description').val();

        alert("New NPC: "+[AddFullName]+ " added!");


        //call the DAL to add the following items to the npc table
        var options = [AddFullName, race, gender, addClass, hp, str, dex, con, int, wis, cha, description];

        function callback() {
            console.info("All records uploaded successfully to npc Database;")

        }

        NPC.DHinsert(options, callback);
    }
    else {
        console.error("form is not valid");
    }
}





function ViewNpc() {
    var options = [];

    function callback(txt, result) {
        var htmlCode = "";

        for (var i = 0; i < result.rows.length; i++) {

            var row = result.rows[i];

            console.info("Id: " + row['id'] +
                " full name: " + row['AddFullName'] +
                " race: " + row['raceId'] +
                " gender: " + row['gender'] +
                " class: " + row['npcClass'] +
                " hp: " + row['hp'] +
                " str: " + row['str']+
                " dex: " + row['dex'] +
                " con: " + row['con'] +
                " int: " + row['int'] +
                " wis: " + row['wis'] +
                " cha: " + row['cha'] +
                " description: " + row['description']
            );

            htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h1>Name: " + row['AddFullName'] + "</h1>" +
                "<h2>Gender: " + row['gender'] + "</h2>" +
                "<h2>Class: " + row['npcClass'] + "</h2>" +
                "<p>description: " + row['description'] + "</p>" +
                "</a></li>";

        }
        var revList = $("#NPClist");

        revList = revList.html(htmlCode);
        revList.listview("refresh"); // very important
        //attach event handler for each list items
        $("#NPClist a").on("click", clickHandler);


        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));


            $(location).prop('href', '#DHEditFeedbackPage');

        }

    }

    NPC.DHselectAll(options, callback)
}






function EditNpc() {


    var id = localStorage.getItem("id");


    var options = [id];

    function callback(txt, result) {
        var row = result.rows[0];

        console.info("Id: " + row['id'] +
            " full name: " + row['AddFullName'] +
            " race: " + row['raceId'] +
            " gender: " + row['gender'] +
            "class: " + row['npcClass'] +
            "hp: " + row['hp'] +
            "str: " + row['str']+
            "dex: " + row['dex'] +
            "con: " + row['con'] +
            "int: " + row['int'] +
            "wis: " + row['wis'] +
            "cha: " + row['cha'] +
            "description: " + row['description']
        );



        $('#EFullName').val(row['AddFullName']);
        $('#ERace').val(row['raceId']).change();
        $('#Egender').val(row['gender']).change();
        $('#EClass').val(row['npcClass']);
        $('#EhitPoints').val(row['']);
        $('#Estr').val(row['hp']);
        $('#Edex').val(row['str']);
        $('#Econ').val(row['dex']);
        $('#Eint').val(row['con']);
        $('#Ewis').val(row['wis']);
        $('#Echa').val(row['cha']);
        $('#Edescription').val(row["description"]);




    }

    NPC.DHselect(options, callback);
}


function UpdateNpc() {

    var id = localStorage.getItem("id");

    if(EditNpcValidation()) {
        var AddFullName = $('#EFullName').val();
        var race = $('#ERace').val();
        var gender = $('#Egender').val();
        var addClass = $('#EClass').val();
        var hp = $('#EhitPoints').val();
        var str = $('#Estr').val();
        var dex = $('#Edex').val();
        var con = $('#Econ').val();
        var int = $('#Eint').val();
        var wis = $('#Ewis').val();
        var cha = $('#Echa').val();
        var description = $('#Edescription').val();


        var options = [AddFullName, race, gender, addClass, hp, str, dex, con, int, wis, cha, description, id];


        function callback() {
            ViewNpc();
            $(location).prop('href', '#DHViewFeedbackPage');
            location.reload();
        }

        NPC.DHupdate(options, callback);
    }
    else{
        console.error("form is not valid");
    }
}


//delete a specific npc page based on ID from the database
function DeleteNpc() {
    var id = localStorage.getItem("id");
    var options = [id];

    function callback() {
        console.info('Successfully deleted data');

        $(location).prop('href', '#DHViewFeedbackPage');
        location.reload();

    }
    NPC.DHdelete(options, callback);
}

//clear all databases from the site
function DHclearDatabase() {
    var result = confirm("Are you sure you want to clear the database of all content? you cannot undo this...");
    if(result){
        try {
            Database.DHdropTables();
            alert('Database has been cleared. Nice fresh start...');
        }
        catch (e) {
            alert(e);
        }
    }

}






