const chai = require('chai');
const supertest = require('supertest');

const app = require('../app');

const assert = chai.assert;
const api = supertest(app);

describe('dogs api', () => {
	it('should be able to get a list of all the dogs', done => {
		app
			.get('/dogs')
			.status(200)
			.end((error, result) => {
				if(error) return done(error);

				assert.typeOf(result.body, 'array');
				assert.lengthOf
			})
	})
})