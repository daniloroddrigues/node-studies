/**
 * Created by damty on 07/12/2017.
 */
var max = 1000;

var generate = function () {
    return Math.floor(Math.random() * max);
};

module.exports = {
    generate: generate
};

