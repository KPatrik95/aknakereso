function calculateNeighbourhood(mineField){
    var result = [];
    var oszlopsz = mineField.length;
    var sorsz = mineField[0].length;
    for(var i=0; i < oszlopsz; i++){
        result[i] = [];
        for(var j=0; j < sorsz; j++){
            var oszlop = i;
            var sor = j;
            var table = countMine(oszlop, sor, mineField);
            result[i][j] = table;
        }
    }
    return result;
}

function countMine(oszlop, sor, mineField) {
    var mines = 0;
    var oszlopszam = mineField.length;
    var sorszam = mineField[0].length;

    if(mineField[oszlop][sor] === -1){
        return -1;
    }
    for (var xoffset = -1; xoffset <= 1; xoffset++) {
        for (var yoffset = -1; yoffset <= 1; yoffset++) {
            var i = oszlop + xoffset;
            var j = sor + yoffset;
            if (i > -1 && i < oszlopszam && j > -1 && j < sorszam && mineField[i][j] === -1) {
                mines++;
            }
        }
    }
    return mines;
}
exports.calculateNeighbourhood = calculateNeighbourhood;

