const express = require("express")
const router = express.Router()
const controllerLogin = require("../controllers/controllerLogin")
router.get("/", (req, res) => {
    res.send("Login route works")
})
router.post("/", controllerLogin.postLoginUser)
module.exports = router