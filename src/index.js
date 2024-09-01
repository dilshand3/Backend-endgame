import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/Database.js";
dotenv.config(
    {
        path : "./.env"
    }
)

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5501, () => {
        console.log(`Server is running on Port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection failed due to",error)
})