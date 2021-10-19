const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { trieuuService } = require('../services');

const createTrieuu = catchAsync(async (req, res) => {
  const trieuu = await trieuuService.createTrieuu(req.body);
  res.status(httpStatus.CREATED).send(trieuu);
});

const getTrieuus = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await trieuuService.queryTrieuus(filter, options);
  res.send(result);
});



module.exports = {
  createTrieuu,
  getTrieuus,

};
