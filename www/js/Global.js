//Main DOCUMENT.ready loader
$(document).ready(function () {
    function initDatabase() {
        try {
            Database.CreateDatabase();
            if (database) {
                console.info("Creating tables");
                Database.CreateTables();
            } else {
                console.error("Unable to create tables");
            }
        } catch (e) {
            console.error("Error: initDatabase could not load")
        }
    }

    initDatabase();  
    init();
});


function Delete() {
    localStorage.setItem("id", $(this).attr("data-row-id"));
    var result = confirm("Are you sure you want to delete this expense?");
    if(result){
        try {
            DeleteExpense();
            alert('Successfully deleted expense.');
        }
        catch (e) {
            alert(e);
        }
    }
}

function Cancel() {
    $(location).prop('href', '#Home');
}

function init() {

    $('#Home').on("pageshow", ViewExpenses);
    $('#ClearDatabase').on("click", ClearDatabase);
    $("#btnDelete").on("click", Delete); 
    $('#btnCancel').on("click", Cancel);
    $('#btnSaveExpense').on("click", AddExpense);
}