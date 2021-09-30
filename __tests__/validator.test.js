/* istanbul ignore file */

'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe.skip('Server', () => {

  // 404 on bad route
  it('should respond with 404 status code for bad route', async () => {
    const response = await mockRequest.get('/oreo');
    expect(response.status).toBe(404);
  });

  // // 404 on bad method
  // it('should respond with a 404 bad method', async () => {
  //   const response = await mockRequest.put('/badMethod');
  //   expect(response.status).toBe(404);
  // });

  // // 500 on no name in query
  // it('should respond with 500 if not name in query', async () => {
  //   const response = await mockRequest.get('/person?name=');
  //   expect(response.status.query).toBe(undefined);
  // });

  // // 200 if name in query
  // it('should respond with 200 if name in query', async () => {
  //   const response = await mockRequest.get('/person?name=oreo');
  //   expect(response.status).toBe(200);
  // });

  // // Given a name in string, output object is correct
  // it('should respond with correct output', async () => {
  //   const response = await mockRequest.get('/person?name=oreo');
  //   expect(typeof response.body).toBe('object');
  // });

});
