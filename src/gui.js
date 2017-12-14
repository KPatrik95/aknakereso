
function guiInitialise(width,height,mines) {
    var matrix = [];
    var mineField = mineFieldInitialiser(width,height,mines);
    var visibleField = visibleFieldInitialiser(width,height);
    var table = document.getElementById("tablazat");
    for(var i=0;i<width;i++)
    {
        var tr = document.createElement("tr");
        table.appendChild(tr);

        matrix.push([]);

        for(var j=0;j<height;j++)
        {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.innerHTML = i+":"+j;
            td.classList.add("Cell");

            matrix[i].push(td);

            var fn = function (i2, j2) {
                td.onclick = function() {
                    console.log("Rákattintottál a ["+i2+":"+j2+"] mezőre.");
                    guiUpdateCell(i2,j2,0,mineField,matrix);
                    exploreCell(mineField,visibleField,i2,j2);
                }
            };

            fn(i, j);
        }
    }
}


function guiUpdateCell(x, y, value, mineField,matrix) {



    if(mineField[x][y] === value) {
        matrix[x][y].innerHTML = "0";
        matrix[x][y].classList.add("Empty");
    } else if (mineField[x][y] === -1) {
        matrix[x][y].innerHTML = "B";
        matrix[x][y].classList.add("BOMB");
    } else {
        matrix[x][y].innerHTML = mineField[x][y];
        matrix[x][y].classList.add("Value");
    }

    if(td.classList.contains("exploredCell")){
        (td.classList.remove("exploredCell"));
    } else{
        td.classList.add("exploredCell");
    }
}

function mineFieldInitialiser(width, height, mines) {


    var visibleField = [];

    var mineField = generateMinefield(width,height, mines);

    for (var i = 0; i < width; i++) {
        visibleField[i] = [];
        for (var j = 0; j < height; j++) {
            visibleField[i][j] = false;
        }
    }

    mineField = calculateNeighbourhood(mineField);

    return mineField;
}
function visibleFieldInitialiser(width, height) {


    var visibleField = [];

    for (var i = 0; i < width; i++) {
        visibleField[i] = [];
        for (var j = 0; j < height; j++) {
            visibleField[i][j] = false;
        }
    }

    return visibleField;
}


function generateMinefield(row, column,mineCount) {
    var mineField = [];
    //console.log(m);
    for(var k=0; k<row;k++){
        mineField[k] = [];
        //console.log(m);
        for(var l=0; l<column;l++){
            mineField[k][l] = 0;
            //console.log(m)
        }
    }
    for(var mine=0;mine<mineCount;mine++){
        var i = Math.floor(Math.random()*row);
        var j = Math.floor(Math.random()*column);
        while(mineField[i][j] == -1){
            i = Math.floor(Math.random()*row);
            j = Math.floor(Math.random()*column);
        }
        mineField[i][j] =-1;
    }

    //console.log(m)
    return mineField;
}
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

function exploreCellNeighbourhood(mineField, visibleField, x, y) {

    var oszlopsz = mineField.length;
    var sorsz = mineField[0].length;

    for (var xoff = -1; xoff <= 1; xoff++) {
        for (var yoff = -1; yoff <= 1; yoff++) {
            var i = x + xoff;
            var j = y + yoff;
            if (i > -1 && i < oszlopsz && j > -1 && j < sorsz && mineField[x][y] !== -1) {
                exploreCell(mineField,visibleField,i,j);
            }
        }
    }
    return visibleField;
}
