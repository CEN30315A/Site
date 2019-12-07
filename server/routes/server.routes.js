const controller = require('../controllers/server.controller.js'),
    express = require('express'), 
    router = express.Router()
  
router.route('/email/')
  .post(controller.email);

router.route('/c/*')
  .get(controller.campaign);

router.route('/retrieve_orders')
  .get(controller.retrieve_orders);

router.route('/retrieve_visits')
  .get(controller.retrieve_visits);

router.route('/charge/')
  .post(controller.charge);
  
module.exports = router;