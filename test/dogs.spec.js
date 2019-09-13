const chai = require('chai');
const supertest = require('supertest');

const app = require('../app');

const assert = chai.assert;
const api = supertest(app);

describe('dogs api', () => {
	it('should be able to get a list of all the dogs', done => {
		api
			.get('/dogs')
			.expect(200)
			.end((error, result) => {
				if(error) return done(error);

				assert.typeOf(result.body, 'array');
				assert.equal(result.body.length, 10);
				assert.deepEqual(result.body[0], {
					id: 0,
					url: 's3://barkwire-images/Image-from-iOS.jpg',
					description: 'Iago is kinda looking for love...not from you though',
					name: 'Iago'
				});

				done();
			});
	});

	it('should be able to get one dog', done => {
		api
			.get('/dogs/1')
			.expect(200)
			.end((error, result) => {
				if(error) return done(error);

				const expectedDog = {
					id: 1,
					url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/Layla.JPG',
					description: 'She wants to go on a walk, but also nap time sounds good too',
					name: 'Layja'
				};

				assert.deepEqual(result.body, expectedDog);
				done();
			});
	});

	it('should get a 404 error if not finding a dog', done => {
		api
			.get('/dogs/100')
			.expect(404, done);
	});
});