function hideTheWholeField(width,height) {
    var m = [];
    for(var k=0; k<width;k++){
        m[k] = [];
        for(var l=0; l<height;l++){
            m[k][l] = false;
        }
    }
    return m;
}
exports.hideTheWholeField = hideTheWholeField;