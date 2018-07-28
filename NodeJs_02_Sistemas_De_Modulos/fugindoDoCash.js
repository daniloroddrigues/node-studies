/**
 * Created by damty on 07/12/2017.
 */

/**
 var createSerialGenerator = function () {

    var max = 1000;

    var generate = function () {
        return Math.floor(Math.random() * max );
    };

    return {
        generate: generate
    };

};

 module.exports = createSerialGenerator;
 */


var serialGenerator = function () {

    var max = 1000;

    this.generate = function () {
        return Math.floor(Math.random() * max);
    };

};

module.exports = serialGenerator;
