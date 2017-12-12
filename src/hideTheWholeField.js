function hideTheWholeField(size) {
    var m = [];
    for(var k=0; k<size;k++){
        m[k] = [];
        for(var l=0; l<size;l++){
            m[k][l] = false;
        }
    }
    return m;
}
exports.hideTheWholeField = hideTheWholeField;