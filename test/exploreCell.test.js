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
    it("már felfedve D", function () {
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
});
