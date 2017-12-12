var chai = require('chai');
var expect = chai.expect;

var fvek = require('../src/win.js');
var win = fvek.win;

describe("Nyertél?", function () {
    //konkrét teszt eset
    it("Igen", function () {
        var want = "win";

        expect(want).equal(win());
    });
});