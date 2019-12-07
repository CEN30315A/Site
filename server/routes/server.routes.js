const controller = require('../controllers/server.controller.js'),
    express = require('express'), 
    router = express.Router()
//Email route
router.route('/email/')
  .post(controller.email);
//campaign route to give out to the general public
router.route('/c/*')
  .get(controller.campaign);
//how to see the orders users
  router.route('/retrieve_orders')
  .get(controller.retrieve_orders);
//how to see the visits from users
  router.route('/retrieve_visits')
  .get(controller.retrieve_visits);
  
module.exports = router;