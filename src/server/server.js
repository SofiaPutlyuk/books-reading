const express = require("express")
const cors = require("cors")
const app = express()
const routerRegistration = require("./routes/RegistrationRouter")
const connectDB = require("../db")
const PORT = 5000
connectDB()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))
app.use("/api/registrationUser" , routerRegistration)
app.listen(PORT , () => {
    console.log("Знайдено сторінку", PORT)
}) 