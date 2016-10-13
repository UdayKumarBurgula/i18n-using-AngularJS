var md5 = require('md5');
var crypto = require('crypto');

module.exports.generateHash = function(hash) {

    try {
        var data = hash;
        data = crypto.createHash('md5').update(data).digest('hex');
        return data;
    } catch (e) {
        throw new Error('Invalid message digest algorithm');
    }
}
