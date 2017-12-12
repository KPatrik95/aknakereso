function wasItABomb(mineField,x,y) {

    if(mineField[x][y]===-1){
        return true;
    }
    else{
        return false;
    }
}

exports.wasItABomb =wasItABomb;