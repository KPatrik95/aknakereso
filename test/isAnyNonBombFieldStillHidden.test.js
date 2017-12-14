var chai = require('chai');
var expect = chai.expect;
var fvek = require('../src/isAnyNonBombFieldStillHidden');


var hiddenBomb = fvek.isAnyNonBombFieldStillHidden;

describe('bombákállapota', function(){
    it('nemláthatók! 3x3', function(){
        var mineField=[
            [ 2, -1,  1],
            [-1, 3,  1],
            [-1,  2,  0]
        ];
        var visibleField = [
            [true,false,true],
            [false,true,true],
            [false,true,true]
        ];
        var result = hiddenBomb(mineField,visibleField);
        var want = true;
        expect(want).equal(result);
    });
    it('láthatóak! 3x3', function(){
        var mineField=[
            [ 2, -1,  1],
            [-1, 3,  1],
            [-1,  2,  0]
        ];
        var visibleField = [
            [true,true,true],
            [false,true,true],
            [false,true,true]
        ];
        var result = hiddenBomb(mineField,visibleField);
        var want = false;
        expect(want).equal(result);
    });
});