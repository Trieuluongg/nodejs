const express = require('express');

const trieuuController = require('../../controllers/trieuu.controller');

const router = express.Router();

router
  .route('/')
  .post(trieuuController.createTrieuu)
  .get(trieuuController.getTrieuus);



module.exports = router;

