const express = require("express")
const app = express()
const connectDB = require("../db")
const cors = require("cors")
const routerBook = require("./routes/BookRouter")
const PORT = 5001;
connectDB()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))
app.use("/api/book", routerBook)
app.listen(PORT, () => {
    console.log("Знайдено сторінку",PORT)
})