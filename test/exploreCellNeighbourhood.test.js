// var chai = require('chai');
// var expect = chai.expect;
//
// var fvek = require('../src/exploreCellNeighbourhood');
// var eCnh = fvek.exploreCellNeighbourhood;
//
//     //konkrét teszt eset
//     it("Szomszédmezők felfedése", function () {
//
//         var mineField = [
//             [-1, -1,  2, -1, -1],
//             [-1,  4,  2,  2,  2],
//             [-1,  2,  0,  0,  0],
//             [ 3,  3,  2,  1,  0],
//             [-1, -1, -1,  1,  0]
//         ];
//         var visibleField = [
//             [false,false,false,false,false],
//             [false,false,false,false,false],
//             [false,true,false,false,false],
//             [false,false,false,false,false],
//             [false,false,false,false,false]
//         ];
//         var x = 2;
//         var y = 2;
//
//         var result = eCnh(mineField,visibleField,x,y);
//
//         var returnVisibleField = [
//             [false,false,false,false,false],
//             [false,false,false,false,false],
//             [false,true,false,false,false],
//             [false,false,false,false,false],
//             [false,false,false,false,false]
//         ];
//
//         expect(returnVisibleField).equal(result);
//     });