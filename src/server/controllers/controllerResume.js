const Resume = require("../models/Resume")
exports.getResume = async (req, res) => {
    try {
        const resume = await Resume.find()
        res.status(200).json(resume)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
exports.postResume = async (req, res) => {
    try {
        const { rating, resume } = req.body
        const newResume = await new Resume({ rating, resume })
        await newResume.save()
        res.status(201).json(newResume)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}