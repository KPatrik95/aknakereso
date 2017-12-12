var chai = require('chai');
var expect = chai.expect;

var fvek = require('../src/Lose.js');
var lose = fvek.lose;

describe("Vesztettél?", function () {
    //konkrét teszt eset
    it("Igen", function () {
        var want = "lose";

        expect(want).equal(lose());
    });
});