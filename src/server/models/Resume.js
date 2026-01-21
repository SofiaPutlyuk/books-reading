const mongoose = require("mongoose")
const ResumeSchema = mongoose.Schema({
    rating:{type:Number, required:true},
    resume:{type:String,required:true}
})
module.exports = mongoose.model("Resume", ResumeSchema)