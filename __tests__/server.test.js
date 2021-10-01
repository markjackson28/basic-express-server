'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const mockData = {
  name: 'Oreo'
}
const mockEmptyData = {}

describe('Server', () => {

  // 404 on bad route
  it('should respond with 404 status code for bad route', async () => {
    const response = await mockRequest.get('/oreo');
    expect(response.status).toBe(404);
  });

  // 404 on bad method
  it('should respond with a 404 bad method', async () => {
    const response = await mockRequest.put('/person');
    expect(response.status).toBe(404);
  });

  // 500 on no name in query
  it('should respond with 500 if not name in query', async () => {
    const response = await mockRequest.get('/person').query(mockEmptyData);
    expect(response.status).toBe(500);
  });

  // 200 if name in query
  it('should respond with 200 if name in query', async () => {
    const response = await mockRequest.get('/person').query(mockData);
    expect(response.status).toBe(200);
  });

  // Given a name in string, output object is correct
  it('should respond with correct output', async () => {
    const response = await mockRequest.get('/person').query(mockData);
    expect(typeof response.body).toBe('object');
  });

});


