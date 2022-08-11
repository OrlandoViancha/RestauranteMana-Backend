const express = require("express");

const router = express.Router();
const {
  
  postCartShopping,

} = require("../controllers/controller_cartShopping");


router.post("/", postCartShopping);


module.exports = router;
