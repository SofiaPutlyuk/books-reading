const mongoose = require("mongoose")
const connectDB = async() => {
    try{
     await mongoose.connect("mongodb://localhost:27017")
     console.log("MongoDB підключений успішно")
    } catch(error){
        console.log("Error", error)
        process.exit(1)
    }
}
module.exports = connectDB;