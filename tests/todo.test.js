require('dotenv');
const todoAPI = require('../lib/todoAPI');
const expect = require('chai').expect;
const _ = require('lodash');

describe('Using api I should be able to GET', () => {
    it('all todos', async () => {
        const response = await todoAPI.getAllTodos();
        expect(response.data).to.be.an('array');
        expect(response.data).to.have.lengthOf(50);
        expect(response.data[0]).to.have.all.keys('id', 'completed', 'userId', 'todo');
    });
    it('all completed todos', async () => {
        const params = {'completed': true};
        const response = await todoAPI.getAllTodos(params);
        expect(response.data).to.be.an('array');
        expect(_.every(response.data, ['completed', true]),
        '\nExpected all retrieved TODO records to be completed:true, but received some completed:false'
    ).to.be.true;
    });

    // ATTENTION: Marked SKIP due to a bug in API which prevents filtering using multiple keys
    it.skip('all todos for a specific user, that have not been completed', async () => {
        const params = {'userId': 73, 'completed': false};
        const response = await todoAPI.getAllTodos(params);
        expect(response.data).to.be.an('array');
        expect(_.every(response.data, ['userId', 73]),
            '\nExpected all retrieved TODO records to be for userId:73, but received some for other userId'
        ).to.be.true;
        expect(_.every(response.data, ['completed', false]),
            '\nExpected all retrieved TODO records to be completed:false, but received some completed:true'
        ).to.be.true;
    });
    it('all todos, despite filtering by invalid key', async () => {
        const params = {'fruit': 'kiwi'};
        const response = await todoAPI.getAllTodos(params);
        expect(response.data).to.be.an('array');
        expect(response.data).to.have.lengthOf(50);
        expect(response.data[0]).to.have.all.keys('id', 'completed', 'userId', 'todo');
    });
    it('empty array, when retrieving todo by non-extant id', async () => {
        const params = {'id': 9999};
        const response = await todoAPI.getAllTodos(params);
        expect(response.data).to.be.an('array');
        expect(response.data).to.have.lengthOf(0);
    });

});


describe('I should receive an error', () => {
    // ATTENTION: Marked SKIP due to a limitation in API which requires paid subscription
    it.skip('when I try to retrieve todo by non-extant id', async () => {
        const id = 73;
        const response = await todoAPI.getTodo(id);
        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');
    });
});
