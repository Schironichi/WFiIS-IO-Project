const server=require("./server.js");
const request = require('supertest');

describe('server test', () => {
    it('baza connection', function(done) {
        request(server)
        .get('/baza')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('organizacja connection', function(done) {
        request(server)
        .get('/organizacje')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('bazaOgloszenUsera connection', function(done) {
        request(server)
        .get('/bazaOgloszenUsera')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('main connection', function(done) {
        request(server)
        .get('/')
        .set('Accept', 'application/json')
        .expect(302, done);
    });
    it('login get connection', function(done) {
        request(server)
        .post('/login')
        .set('Accept', 'application/json')
        .expect(302, done);
    });
    it('login post connection', function(done) {
        request(server)
        .get('/login')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    it('details of advert', function(done) {
        request(server)
        .get('/details/1')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
})