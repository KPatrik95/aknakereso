var chai = require('chai');
var expect = chai.expect;

var fvek = require('../src/hideTheWholeField.js');
var takaras = fvek.hideTheWholeField;

describe("takarás", function () {

    it("letakarás 3x3", function () {
        var size = 3;
        var result = takaras(size);

        var kimenet =[
            [false,false,false],
            [false,false,false],
            [false,false,false]
        ]
        console.log(kimenet);
        expect(result).deep.equal(kimenet);
    });
});
