'use strict';

// From class
const validator = require('../src/middleware/vaildator');

describe('Name Validator Middleware', () => {

  it('rejects req without a name', () => {
    let req = { query: {} };
    let res = { };
    // Spy on next method
    let next = jest.fn();

    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Name is empty');
  });

});
