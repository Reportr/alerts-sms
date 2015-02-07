var Q = require('q');
var _ = require('lodash');
var Twilio = require('twilio');

module.exports = function(options) {
    var exec = function(alert, alertConfig, e) {
        var deferred = Q.defer();

        var client = Twilio(options.sId, options.token);

        client.messages.create({
            body: _.template(alertConfig.body || "", e),
            to: alertConfig.to,
            from: options.from
        }, function(err, message) {
            if (err) return deferred.reject(err);
            deferred.resolve();
        });

        return deferred.promise;
    };

    return {
        id: "sms",
        execute: exec
    };
};
