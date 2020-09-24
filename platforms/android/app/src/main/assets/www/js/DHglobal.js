//Main DOCUMENT.ready loader
$(document).ready(function () {
    function initDatabase() {
        try {
            Database.DHCreatDatabase();
            if (database) {
                console.info("creating tables");
                Database.DHcreateTables();
            } else {
                console.error("didn't make tables");
            }
        } catch (e) {
            console.error("Error: initDatabase could not load")
        }
    }

    initDatabase();
    init();
});






function CancelOut() {
    $(location).prop('href', '#DHViewFeedbackPage');
}

function init() {

    $('#DHViewFeedbackPage').on("pageshow", ViewNpc);
    $('#DHEditFeedbackPage').on("pageshow", EditNpc);
    $('#deleteBtn').on("click", DeleteNpc);
    $('#DHClearDatabase').on("click", DHclearDatabase);
    $('#cancelBtn').on("click", CancelOut);
    $('#saveNpc').on("click", AddNpc);
    $('#updateBtn').on("click", UpdateNpc);
    $('#d4').on("click", RollD4);
    $('#d6').on("click", RollD6);
    $('#d8').on("click", RollD8);
    $('#d10').on("click", RollD10);
    $('#d12').on("click", RollD12);
    $('#d20').on("click", RollD20);
    $('#d100').on("click", RollD100);


}