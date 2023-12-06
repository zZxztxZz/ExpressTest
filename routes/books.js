var express = require('express');
var router = express.Router();
const book_controller = require("../controllers/BookController")
/* GET books listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/bookAll',book_controller.book_get_list)

router.post('/bookAdd',book_controller.book_add_post)

router.post('/bookDelete',book_controller.book_delete_post)

router.get('/bookCheck/:bookId',book_controller.book_check_get)

module.exports = router;