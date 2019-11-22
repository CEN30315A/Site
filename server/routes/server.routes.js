const examples = require('../controllers/server.controller.js'),
    express = require('express'), 
    router = express.Router()

router.route('/hello/')
  .get(examples.hello);
  
router.route('/email/')
  .post(examples.email);
  
module.exports = router;