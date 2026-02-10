const mongoose = require("mongoose")
const connectDB = async() => {
    try{
     await mongoose.connect("mongodb://127.0.0.1:27017/BooksReading")
     console.log("MongoDB підключений успішно")
    } catch(error){
        console.log("Error", error)
        process.exit(1)
    }
}
module.exports = connectDB;