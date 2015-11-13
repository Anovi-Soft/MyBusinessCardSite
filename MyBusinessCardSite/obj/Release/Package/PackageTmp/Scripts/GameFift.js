
var gridValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
shuffle(gridValues);

function shuffle() {
    var currentIndex = gridValues.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = gridValues[currentIndex];
        gridValues[currentIndex] = gridValues[randomIndex];
        gridValues[randomIndex] = temporaryValue;
    }
    return gridValues;
}

function isMoveble(i) {
    return (i % 4 !== 0 && gridValues[i - 1] === 0) ||
    (i % 4 !== 3 && gridValues[i + 1] === 0) ||
    (Math.ceil(i / 4) != 0 && gridValues[i - 4] === 0) ||
    (Math.ceil(i / 4) - 3 <= 0.1 && gridValues[i + 4] === 0);
}

function swap(a, b) {
    var tmp = gridValues[a];
    gridValues[a] = gridValues[b];
    gridValues[b] = tmp;
}

function move(i) {
    if (isMoveble(i) && !IsEnd()) {
        swap(i, gridValues.indexOf(0));
        update();
    }
}

function IsEnd() {
    for (var i = 0; i < 15; i++)
        if (gridValues[i] !== i + 1)
            return false;
    message('Good game');
    return true;
}

function update() {
    for (var i = 0; i < 16; i++)
        if (gridValues[i] === 0)
            document.getElementById('td' + i).innerHTML = '<br/>';
        else
            document.getElementById('td' + i).innerHTML = gridValues[i];
    IsEnd();
}
function initGame() {
    for (var i = 0; i < 4; i++) {
        document.getElementById('game_group').innerHTML += '<div class="row" id="game_row_' + i + '"></div>';
        for (var j = 0; j < 4; j++) {
            document.getElementById('game_row_' + i).innerHTML +=
                '<div class="col-1-4 gameObj">' +
                '<div class="paper gameObjText" onclick="move(' + (i * 4 + j) + ')"><div id="td' + (i * 4 + j) + '" style="font: 60px RobotoBold; text-align: center;"></div></div>' +
                '</div>';
        }

    }
    update();
}
function message(s) {
    document.getElementById("game_message").innerHTML = s;
}

function message() {
    message("Its a easy game");
}