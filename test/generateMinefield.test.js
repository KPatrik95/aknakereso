var chai = require('chai');
var expect = chai.expect;

var fvek = require('../src/generateMinefield.js');
var bombasz = fvek.generateMinefield;

describe("Bombákszámlálása", function () {

    //konkrét teszt eset
    it("bombák száma", function () {
        var row = 4;
        var column = 4;
        var mineCount = 6;
        var m = bombasz(row, column,mineCount);
        var szamlal = 0;

        for(var i=0;i<row;i++){
            for(var j=0;j<column;j++){
                if(m[i][j] === -1){
                    szamlal++;
                }

            }
        }
        console.log(szamlal);
        expect(szamlal).equal(mineCount);
    })
})
