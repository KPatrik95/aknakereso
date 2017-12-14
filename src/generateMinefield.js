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
exports.generateMinefield = generateMinefield;
