function exploreCell(mineField,visibleField,x,y) {
    if(visibleField[x][y] === true){
        console.log("already-explored");
        return "already-explored";
    }
    else if(mineField[x][y]=== -1){
        console.log("bomb-found");
        return "bomb-found";
    }
    else if(mineField[x][y]=== 0){
        console.log("explored");
        exploreCellNeighbourhood(mineField, visibleField, x, y);
        return "explored";
    }
}
exports.exploreCell = exploreCell;


function exploreCellNeighbourhood(mineField, visibleField, x, y) {

    var oszlopsz = mineField.length;
    var sorsz = mineField[0].length;

    for (var xoff = -1; xoff <= 1; xoff++) {
        for (var yoff = -1; yoff <= 1; yoff++) {
            var i = oszlopsz + xoff;
            var j = sorsz + yoff;
            if (i > -1 && i < oszlopsz && j > -1 && j < sorsz && mineField[i][j] !== -1) {

                visibleField[i][j]= true
                console.log(i);
                console.log(j);
                exploreCell(mineField,visibleField,i,j);
            }
        }
    }

    return visibleField;
}

exports.exploreCellNeighbourhood = exploreCellNeighbourhood;

var mineField = [
    [-1, -1,  2, -1, -1],
    [-1,  4,  2,  2,  2],
    [-1,  2,  0,  0,  0],
    [ 3,  3,  2,  1,  0],
    [-1, -1, -1,  1,  0]
];
var visibleField = [
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false]
];
var x = 2;
var y = 2;


console.log(exploreCellNeighbourhood(mineField,visibleField,x,y));