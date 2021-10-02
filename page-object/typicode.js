const httpCaller = require('supertest');
const api = httpCaller('https://jsonplaceholder.typicode.com');


function getTypicode() {
    return api
    .get('/posts')
    .set('Connection', 'keep-alive')
    .set('Accept', 'application/json');
}

module.exports = {
    getTypicode
}