const express = require("express")
const router = express.Router()
const registrationController = require("../controllers/controllerRegistration")
router.get("/", registrationController.getRegistrationUser)
router.post("/", registrationController.postRegistrationUser)
module.exports = router