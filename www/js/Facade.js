$(document).ready(function () {

    function CategoryDropdown() {
        var options = [];
        var select = document.getElementById("category");

        function callback(txt, result) {

            for (var i = 0; i < result.rows.length; i++) {
                var row = result.rows[i];
                var list = document.createElement("option");
                list.textContent = row.CategoryName;
                list.value = row.CategoryID;

                select.appendChild(list);
            }
        }

        Category.SelectAll(options, callback);
    }
    CategoryDropdown();
})

function AddExpense() {

    //obtain information to add to expense database
    if(ExpenseValidation()){

        var expenseName = $('#expense').val();
        var cost = $('#cost').val();
        var category = $('#category').val();

        alert("New expense: "+[expenseName]+ " added!");


        //add the following items to the expense table
        var options = [expenseName, cost, category];

        function callback() {
            console.info("All records uploaded successfully to expense table.")
            //go back to list view
            $(location).prop('href', '#Home');
        }

        Expense.Insert(options, callback);
    }
    else {
        console.error("Form is not valid");
    }
}


function ViewExpenses() {
    var options = [];

    function callback(txt, result) {
        var htmlCode = "";

        for (var i = 0; i < result.rows.length; i++) {

            var row = result.rows[i];
            //get name of category from the id attached to the expense
            //this didn't work because its a callback function
            //inside a callback function
            //var category = (function() {
                //var options = [row.CategoryID];
                //function callback(txt, result) {
                   // var row = result.rows[0];
                    //console.info(row.CategoryName);
                    //return row.CategoryName;
                //}
               //Category.Select(options, callback);
            //})(); 
            //this is not ideal but it works
            var category;
            switch(row.CategoryID) {
                case 1:
                    category = "House";
                  break;
                case 2:
                    category = "Car";
                  break;
                case 3:
                    category = "Medical";
                  break;
                case 4:
                    category = "Leisure";
                  break;
                case 5:
                    category = "Education";
                  break;
                default:
                  
              }

            console.info("Id: " + row.ExpenseID +
                " Expense: " + row.ExpenseName +
                " Cost: $" + row.Cost +
                " Category: " + category
            );

            htmlCode += "<li><ui data-row-id='" + row.ExpenseID + "'>" +
                "<h1 class='font-weight-bold'>Expense: " + row.ExpenseName + "</h1>" +
                "<input type='button' class='btn btn-danger' data-inline='true' id='btnDelete' data-row-id=" + row.ExpenseID + " value='Delete'>" +
                "<h2 class='font-weight-normal'>Cost: $" + row.Cost + "</h2>" +  
                "<h2 class='font-weight-normal'>Category: " + category + "</h2>" +              
                "</ui></li>";

        }
        var revList = $("#ExpenseList");

        revList = revList.html(htmlCode);
        revList.listview("refresh"); // very important
        //attach event handler for each list items
        $("#ExpenseList input").on("click", Delete);          
    }

    Expense.SelectAll(options, callback);
}

//delete a specific expense page based on ID from the database
function DeleteExpense() {
    var id = localStorage.getItem("id");
    var options = [id];

    function callback() {
        console.info('Successfully deleted data');

        $(location).prop('href', '#Home');
        location.reload();

    }
    Expense.Delete(options, callback);
}

//clear all tables from the site
function ClearDatabase() {
    var result = confirm("Are you sure you want to clear the database of all content? you cannot undo this...");
    if(result){
        try {
            Database.DropTables();
            alert('Database has been cleared.');
        }
        catch (e) {
            alert(e);
        }
    }

}






