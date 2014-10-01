var _ = require('lodash'),
    status = require('statuses');

var defaults = {
  param: 'envelope'
};

function resvelope(opts) {
  opts = opts || {};
  _.defaults(opts, defaults);

  return function (req, res, next) {
    if (!req.query[opts.param]) return next();

    var send = _.bind(res.send, res);

    res.send = function (data) {
      var envelope = {};

      envelope.data = data;
      envelope.headers = res._headers;
      envelope.status = res.statusCode;

      res.status(status.OK);
      res.type('application/json');

      send(JSON.stringify(envelope));
    };

    next();
  };
}

module.exports = resvelope;