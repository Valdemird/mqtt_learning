const express = require('express')
const controller = require('./controller')
const router = express.Router()


router.get("/",controller.getCollection)
router.get("/:id",controller.getResourse)
router.post("/:id/frequency",controller.setFrequency)


module.exports = router;