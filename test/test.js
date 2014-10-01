var express = require('express'),
    request = require('supertest'),
    resvelope = require('../'),
    should = require('should'),
    status = require('statuses');

describe('resvelope', function () {
  var app = express(),
      agent = request.agent(app);

  app.use(resvelope());
  app.get('*', function (req, res) {
    res
      .status(status['Not Found'])
      .send(status[404]);
  });

  it('should wrap response and return 200 regardless', function (done) {
    agent
      .get('/?envelope=true')
      .expect(status.OK)
      .expect(function (res) {
        should(res.body.status).be.eql(status['Not Found']);
        should(res.body.data).be.eql(status[404]);
      })
      .end(done);
  });
});