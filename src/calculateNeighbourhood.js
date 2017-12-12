function calculateNeighbourhood(m){
    var result = [];

    for(var i=0; i < m.length; i++){
        result[i] = [];
        for(var j=0; j < m.length; j++){
            var oszlop = i;
            var sor = j;
            var table = countMine(oszlop, sor, m);
            result[i][j] = table;
        }
    }
    return result;
}

function countMine(oszlop, sor, m) {
    var mines = 0;
    var length = m.length;

    if(m[oszlop][sor] === -1){
        return -1;
    }
    for (var xoffset = -1; xoffset <= 1; xoffset++) {
        for (var yoffset = -1; yoffset <= 1; yoffset++) {
            var i = oszlop + xoffset;
            var j = sor + yoffset;
            if (i > -1 && i < length && j > -1 && j < length && m[i][j] === -1) {
                mines++;
            }
        }
    }
    return mines;
}
exports.calculateNeighbourhood = calculateNeighbourhood;

