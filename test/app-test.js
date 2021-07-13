const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

chai.should();
chai.use(chaiHttp);

/* Test the /GET route */
describe('app index route with 503 status', () => {
    it('it should GET /', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(503);
                done();
            });
    });

    it('it should handle any route', (done) => {
        chai.request(app)
            .get('/foobar')
            .end((err, res) => {
                res.should.have.status(503);
                done();
            });
    });

    it('it should serve static assets', (done) => {
        chai.request(app)
            .get('/images/foundry-spatial-logo.svg')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
