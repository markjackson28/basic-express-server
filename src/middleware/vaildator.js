'use strict';

module.exports = (req, res, next) => {
  let name = req.query.name;
  if (!name) {
    next(`Name is empty`);
  } else {
    next();
  }
}
