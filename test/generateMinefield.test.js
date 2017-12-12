var chai = require('chai');
var expect = chai.expect;

var fvek = require('../src/generateMinefield.js');
var bombasz = fvek.generateMinefield;

describe("Bombákszámlálása", function () {

    //konkrét teszt eset
    it("bombák száma", function () {
        var size = 4;
        var mineCount = 6;
        var m = bombasz(size,mineCount);
        var szamlal = 0;

        for(var i=0;i<size;i++){
            for(var j=0;j<size;j++){
                if(m[i][j] === -1){
                    szamlal++;
                }

            }
        }
        expect(szamlal).equal(mineCount);
    })
})
