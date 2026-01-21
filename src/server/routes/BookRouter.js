const express = require("express")
const router = express.Router()
const controllerBook = require("../controllers/controllerBook")
const controllerResume = require("../controllers/controllerResume")
router.get("/", controllerBook.getBooks)
router.post("/", controllerBook.postBooks)
router.get("/resume", controllerResume.getResume)
router.post("/resume", controllerResume.postResume)
module.exports = router