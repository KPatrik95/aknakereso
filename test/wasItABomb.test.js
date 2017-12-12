var chai = require('chai');
var expect = chai.expect;
var fvek = require('../src/wasItABomb');


var bombavot = fvek.wasItABomb;

describe('Bombavót!?', function(){
    it('IGEN! 3x3', function(){
        var mineField=[
            [ 0, -1,  0],
            [-1, 0,  0],
            [-1,  0,  0]
        ];
        var x = 0;
        var y = 1;
        var result = bombavot(mineField,x,y);
        var want = true;
        expect(want).equal(result);
    });
    it('NEM! 3x3', function(){
        var mineField=[
            [ 2, -1,  1],
            [-1, 3,  1],
            [-1,  2,  0]
        ];
        var x = 0;
        var y = 0;
        var result = bombavot(mineField,x,y);
        var want = false;
        expect(want).equal(result);
    });
});