const controller = require('../controllers/server.controller.js'),
    express = require('express'), 
    router = express.Router()
  
router.route('/email/')
  .post(controller.email);

router.route('/c/*')
  .get(controller.campaign);
  
module.exports = router;