var chai = require('chai');
var expect = chai.expect;
var fvek = require('../src/calculateNeighbourhood.js');

var szomszedok = fvek.calculateNeighbourhood;

describe('Szomszédok számlálása', function(){
    it('3x3', function(){
        var bemenet = [
            [ 0, -1,  0],
            [-1, 0,  0],
            [-1,  0,  0]
        ];
        var kimenet = [
            [ 2, -1,  1],
            [-1,  3,  1],
            [-1,  2,  0]
        ];

        var result = szomszedok(bemenet);
        console.log('Bemenet tábla (3x3):');
        console.log(kimenet);
        expect(result).deep.equal(kimenet);
    });

    it('5x5', function(){
        var bemenet = [
            [ 0, -1,  0, -1, -1],
            [-1, 0,  0, -1, 0],
            [-1,  0,  -1, 0, 0],
            [0,  -1,  -1, 0, 0],
            [-1,  0,  0, 0, 0]
        ];
        var kimenet = [
            [ 2, -1,  3, -1, -1],
            [-1, 4,  4, -1, 3],
            [-1,  5,  -1, 3, 1],
            [3,  -1,  -1, 2, 0],
            [-1,  3,  2, 1, 0]
        ];

        var result = szomszedok(bemenet);
        console.log('Bemenet tábla (5x5):');
        console.log(kimenet);
        expect(result).deep.equal(kimenet);
    });

    it('10x5', function(){
        var bemenet = [
            [-1, -1,  0, -1, -1],
            [-1, 0,  0, -1, 0],
            [-1,  0,  -1, 0, 0],
            [0,  -1,  -1, 0, 0],
            [-1,  0,  0, 0, 0],
            [ 0, -1,  0, -1, -1],
            [-1, 0,  0, -1, 0],
            [-1,  0,  -1, 0, 0],
            [0,  -1,  -1, 0, 0],
            [-1,  0,  0, 0, -1]
        ];
        var kimenet = [
            [-1, -1,  3, -1, -1],
            [-1,  5,  4, -1,  3],
            [-1,  5, -1,  3,  1],
            [ 3, -1, -1,  2,  0],
            [-1,  4,  4,  3,  2],
            [ 3, -1,  3, -1, -1],
            [-1,  4,  4, -1,  3],
            [-1,  5, -1,  3,  1],
            [ 3, -1, -1,  3,  1],
            [-1,  3,  2,  2,  -1]
        ];

        var result = szomszedok(bemenet);
        console.log('Bemenet tábla (10x5):');
        console.log(kimenet);
        expect(result).deep.equal(kimenet);
    });

    it('10x10', function(){
        var bemenet = [
            [ 0, -1,  0, -1, -1, 0, -1,  0, -1, -1],
            [-1, 0,  0, -1, 0, -1, 0,  0, -1, 0],
            [-1,  0,  -1, 0, 0, -1,  0,  -1, 0, 0],
            [ 0,  -1,  -1, 0, 0, 0,  -1,  -1, 0, 0],
            [-1,  0,  0, 0, 0, -1,  0,  0, 0, 0],
            [ 0, -1,  0, -1, -1, 0, -1,  0, -1, -1],
            [-1, 0,  0, -1, 0, -1, 0,  0, -1, 0],
            [-1,  0,  -1, 0, 0, -1,  0,  -1, 0, 0],
            [ 0,  -1,  -1, 0, 0, 0,  -1,  -1, 0, 0],
            [-1,  0,  0, 0, 0, -1,  0,  0, 0, 0]
        ];
        var kimenet = [
            [ 2, -1,  3, -1, -1,  3, -1,  3, -1, -1],
            [-1,  4,  4, -1,  5, -1,  4,  4, -1,  3],
            [-1,  5, -1,  3,  3, -1,  5, -1,  3,  1],
            [ 3, -1, -1,  2,  2,  3, -1, -1,  2,  0],
            [-1,  4,  4,  3,  3, -1,  4,  4,  3,  2],
            [ 3, -1,  3, -1, -1,  4, -1,  3, -1, -1],
            [-1,  4,  4, -1,  5, -1,  4,  4, -1,  3],
            [-1,  5, -1,  3,  3, -1,  5, -1,  3,  1],
            [ 3, -1, -1,  2,  2,  3, -1, -1,  2,  0],
            [-1,  3,  2,  1,  1, -1,  3,  2,  1,  0]
        ];

        var result = szomszedok(bemenet);
        console.log('Bemenet tábla (10x10):');
        console.log(kimenet);
        expect(result).deep.equal(kimenet);
    });
});