function generateMinefield(size,mineCount) {
    var m = [];
    //console.log(m);
    for(var k=0; k<size;k++){
        m[k] = [];
        //console.log(m);
        for(var l=0; l<size;l++){
            m[k][l] = 0;
            //console.log(m)
        }
    }
    for(var mine=0;mine<mineCount;mine++){
        var i = Math.floor(Math.random()*size);
        var j = Math.floor(Math.random()*size);
        while(m[i][j] == -1){
            i = Math.floor(Math.random()*size);
            j = Math.floor(Math.random()*size);
        }
        m[i][j] =-1;
    }

    //console.log(m)
    return m;
}
exports.generateMinefield = generateMinefield;
generateMinefield(4,6);