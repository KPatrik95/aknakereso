var chai = require('chai');
var expect = chai.expect;

var fvek = require('../src/exploreCell.js');
var vizsgal = fvek.exploreCell;

describe("állapot vizsgálat", function () {

    it("fel van forditva?", function () {
        var matrix = [
            [-1,   0, 0],
            [0 , -1, 0],
            [-1,  -1, 0]
        ];
        var visibleField = [
            [false,false,false],
            [true,false,false],
            [false,false,false]
        ];
        var x = 1;
        var y = 0;
        var result = vizsgal(matrix,visibleField,x,y);

        var kimenet = "already-explored";

        expect(result).equal(kimenet);
    });
    it("BOMBA!", function () {
        var matrix = [
            [-1,   0, 0],
            [0 , -1, 0],
            [-1,  -1, 0]
        ];
        var visibleField = [
            [false,false,false],
            [true,false,false],
            [false,false,false]
        ];
        var x = 0;
        var y = 0;
        var result = vizsgal(matrix,visibleField,x,y);

        var kimenet = "bomb-found";

        expect(result).equal(kimenet);
    });
    it("már felfedve C", function () {
        var matrix = [
            [-1,   0, 0],
            [0 , -1, 0],
            [-1,  -1, 0]
        ];
        var visibleField = [
            [false,false,false],
            [true,false,false],
            [false,false,false]
        ];
        var x = 0;
        var y = 1;
        var result = vizsgal(matrix,visibleField,x,y);

        var kimenet = "explored";

        expect(result).equal(kimenet);
    });




    var fvek = require('../src/exploreCell.js');
    var eCnh = fvek.exploreCellNeighbourhood;

    //konkrét teszt eset
    it("Szomszédmezők felfedése", function () {

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

        var result = eCnh(mineField,visibleField,x,y);

        var returnVisibleField = [
            [false, false, false, false, false],
            [false, true,  true,  true,  true],
            [false, true,  true,  true,  true],
            [ false, true,  true,  true,  true],
            [false, false, false, true,  true]
        ];
        // console.log("bevitel: "+visibleField);
        // console.log("elvárt kijövő: "+returnVisibleField);
        // console.log("tényleges kijövő: "+result);
        expect(returnVisibleField).deep.equal(result);
    });


});
