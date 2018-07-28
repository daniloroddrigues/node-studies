/**
 * Created by damty on 07/12/2017.
 */

var config = require('./config');

exports.generate = function () {
    return Math.floor(Math.random() * config.max);
};
