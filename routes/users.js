var express = require('express');
var router = express.Router();
const user_controller = require("../controllers/UserController")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/userAll',user_controller.user_list)

router.post('/userAdd',user_controller.user_add_post)

router.post('/userDelete',user_controller.user_delete_post)

router.get('/userCheck/:userId',user_controller.user_check_get)

module.exports = router;
