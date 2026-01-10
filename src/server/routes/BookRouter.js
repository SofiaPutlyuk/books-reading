const express = require("express")
const router = express.Router()
const controllerBook = require("../controllers/controllerBook")
router.get("/", controllerBook.getBooks)
router.post("/", controllerBook.postBooks)
module.exports = router