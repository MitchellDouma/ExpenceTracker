function RollD4() {

    var rolls = parseInt($('#rollAmount').val());
    var allRolls = 0;
    var addRolls =0;

    for (var i = 0; i < rolls; i++) {

        allRolls = Math.floor(Math.random() * 4) + 1;
        addRolls += allRolls;
    }
    document.getElementById('showResult').innerHTML = addRolls.toString();


}

function RollD6() {

    var rolls = parseInt($('#rollAmount').val());
    var allRolls = 0;
    var addRolls =0;

    for (var i = 0; i < rolls; i++) {

        allRolls = Math.floor(Math.random() * 6) + 1;
        addRolls += allRolls;
    }
    document.getElementById('showResult').innerHTML = addRolls.toString();


}

function RollD8() {

    var rolls = parseInt($('#rollAmount').val());
    var allRolls = 0;
    var addRolls =0;

    for (var i = 0; i < rolls; i++) {

        allRolls = Math.floor(Math.random() * 8) + 1;
        addRolls += allRolls;
    }
    document.getElementById('showResult').innerHTML = addRolls.toString();


}

function RollD10() {

    var rolls = parseInt($('#rollAmount').val());
    var allRolls = 0;
    var addRolls =0;

    for (var i = 0; i < rolls; i++) {

        allRolls = Math.floor(Math.random() * 10) + 1;
        addRolls += allRolls;
    }
    document.getElementById('showResult').innerHTML = addRolls.toString();


}

function RollD12() {

    var rolls = parseInt($('#rollAmount').val());
    var allRolls = 0;
    var addRolls =0;

    for (var i = 0; i < rolls; i++) {

        allRolls = Math.floor(Math.random() * 12) + 1;
        addRolls += allRolls;
    }
    document.getElementById('showResult').innerHTML = addRolls.toString();


}
function RollD20() {

    var rolls = parseInt($('#rollAmount').val());
    var allRolls = 0;
    var addRolls =0;

    for (var i = 0; i < rolls; i++) {

        allRolls = Math.floor(Math.random() * 20) + 1;
        addRolls += allRolls;
    }
    document.getElementById('showResult').innerHTML = addRolls.toString();


}

function RollD100() {

    var rolls = parseInt($('#rollAmount').val());
    var allRolls = 0;
    var addRolls =0;

    for (var i = 0; i < rolls; i++) {

        allRolls = Math.floor(Math.random() * 100) + 1;
        addRolls += allRolls;
    }
    document.getElementById('showResult').innerHTML = addRolls.toString();


}