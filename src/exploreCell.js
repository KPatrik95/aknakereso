function exploreCell(mineField,visibleField,x,y) {
    if(visibleField[x][y] === true){
        return "already-explored";
    }
    if(mineField[x][y]=== -1){
        return "bomb-found";
    }
    if(mineField[x][y]=== 0){
        //exploreCellNeighbourhood(mineField, visibleField, x, y);
        return "explored";
    }
    return "explored";
}
exports.exploreCell = exploreCell;