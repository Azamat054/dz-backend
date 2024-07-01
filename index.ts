import express from 'express'
import { logger } from './logger'
import connectDB from './db'
import globalRouter from './global-router'
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3000

connectDB()
app.use(cors())
app.use(logger)
app.use(express.json())
app.use("/api", globalRouter)

app.get('/', (request, response) => {
    response.send("Hello world")
})

app.listen(PORT, () => {
    console.log(`Server runs at http://localhost:${PORT}`)
})