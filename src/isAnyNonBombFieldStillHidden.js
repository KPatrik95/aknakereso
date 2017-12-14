function isAnyNonBombFieldStillHidden(mineField, visibleField) {
    var oszlopsz = mineField.length;
    var sorsz = mineField[0].length;
    for(var i=0; i < oszlopsz; i++) {
        for (var j = 0; j < sorsz; j++) {
            if(mineField[i][j]===-1 && visibleField[i][j]===true){
                return  false;
            }
        }
    }
    return true;
}
exports.isAnyNonBombFieldStillHidden=isAnyNonBombFieldStillHidden;