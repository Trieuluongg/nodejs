const mongoose = require('mongoose');
const { toJSON, paginate} = require('./plugins');

const trieuuSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
  
    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
trieuuSchema.plugin(toJSON);
trieuuSchema.plugin(paginate);

/**
 * @typedef Trieuu
 */
const Trieuu = mongoose.model('Trieuu', trieuuSchema);

module.exports = Trieuu;