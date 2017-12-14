function exploreCell(mineField,visibleField,x,y) {
    if(visibleField[x][y] === true){
        //console.log("already-explored");
        return "already-explored";
    }
    else if(mineField[x][y]=== -1){
        //console.log("bomb-found");
        return "bomb-found";
    }
    else {
        //console.log("explored");
        visibleField[x][y] = true;
        if(mineField[x][y]=== 0) exploreCellNeighbourhood(mineField, visibleField, x, y);
        return "explored";
    }
}

exports.exploreCell = exploreCell;


function exploreCellNeighbourhood(mineField, visibleField, x, y) {

    var oszlopsz = mineField.length;
    var sorsz = mineField[0].length;

    for (var xoff = -1; xoff <= 1; xoff++) {
        for (var yoff = -1; yoff <= 1; yoff++) {
            var i = x + xoff;
            var j = y + yoff;
            // console.log("i= "+i);
            // console.log("j= "+j);
            if (i > -1 && i < oszlopsz && j > -1 && j < sorsz && mineField[x][y] !== -1) {
                // console.log("i2= "+i);
                // console.log("j2= "+j);
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


exploreCell(mineField,visibleField,x,y);
console.log(visibleField);