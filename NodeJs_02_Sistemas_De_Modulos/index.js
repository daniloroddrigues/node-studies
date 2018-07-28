/**
 * Created by damty on 07/12/2017.
 */

// var serialGenerator = require('./serialGenerator');

// console.log(serialGenerator.generate());

// var createSerialGenerator = require('./fugindoDoCash');
// var serialGeneratorA = createSerialGenerator();
// var serialGeneratorB = createSerialGenerator();

// console.log(serialGeneratorA.generate());
// console.log(serialGeneratorA === serialGeneratorB);

var serialGenerator = require('./fugindoDoCash');
var serialGeneratorA = new serialGenerator();
var serialGeneratorB = new serialGenerator();

console.log(serialGeneratorA.generate());
console.log(serialGeneratorA === serialGeneratorB);

