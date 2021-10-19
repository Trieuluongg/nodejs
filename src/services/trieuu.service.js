const httpStatus = require('http-status');
const { Trieuu } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a trieuu
 * @param {Object} trieuuBody
 * @returns {Promise<Trieuu>}
 */
const createTrieuu = async (trieuuBody) => {

  return Trieuu.create(trieuuBody);
};

/**
 * Query for trieuus
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTrieuus = async (filter, options) => {
  const trieuus = await Trieuu.paginate(filter, options);
  return trieuus;
};



module.exports = {
  createTrieuu,
  queryTrieuus,

};
