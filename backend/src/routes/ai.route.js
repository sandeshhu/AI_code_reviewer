const express = require("express"); 
const router = express.Router();
const aiController = require("../Controller/ai.controller")

router.post("/get-review",aiController.getreview);


module.exports = router;