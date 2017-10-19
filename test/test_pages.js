var expect  = require('chai').expect;
var request = require('request');
var chaiHttp = require('chai-http');
var chai = require('chai');
var app = require('../app');
chai.use(chaiHttp);

describe('/', function() {
  it('Main page content', function(done) {
    chai.request(app)
      .get('/')
      .end(function(err,res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      })
  });
});

describe('/fund/:id', function() {
	it('Fund page content', function(done) {
    chai.request(app)
      .get('/fund/59e61d85734d1d62dcbff01c')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      })
	})
})

describe('/fund/new', function() {
	it('creates a new fund', function(done) {
    chai.request(app)
      .post('/fund/new')
      .send({
        title: 'new fund',
        goal: 100
      })
      .end(function(err, res){
        expect(res).to.have.status(200);
        expect(res.body.title).to.equal('new fund');
        expect(res.body.goal).to.equal(100);
        expect(res.body.raised).to.equal(0);
        done();
      })
	})
})
