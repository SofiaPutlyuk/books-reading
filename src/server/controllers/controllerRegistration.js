const RegistrationUser = require("../models/Registration")
exports.getRegistrationUser = async (req, res) => {
    try {
        const registrationUsers = await RegistrationUser.find()
        res.status(200).json(registrationUsers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
exports.postRegistrationUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body
        const newRegistrationUser = await new RegistrationUser({ name, email, password, confirmPassword })
        await newRegistrationUser.save()
        res.status(201).json(newRegistrationUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}