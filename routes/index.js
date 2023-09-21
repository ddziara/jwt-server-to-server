const express = require("express");
const authenticate = require("../middleware/authenticate");

const producerControler = require("../controller/producer");
const consumerController = require("../controller/consumer");

const router = express.Router();

router.post("/produce", producerControler.produce);

router.use(authenticate);
router.post("/consume", consumerController.consume);

module.exports = router;