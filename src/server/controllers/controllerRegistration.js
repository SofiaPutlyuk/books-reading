const User = require("../models/User")
exports.getRegistrationUser = async (req, res) => {
    try {
        const accountUsers = await User.find()
        res.status(200).json(accountUsers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
exports.postRegistrationUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body
        const newAccountUser = await new User({ name, email, password, confirmPassword })
        await newAccountUser.save()
        res.status(201).json(newAccountUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}