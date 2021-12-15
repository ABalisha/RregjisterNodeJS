import express from 'express'
import { router } from './routes/routes.mjs'
import { sequelize } from './sequelize.mjs'
const app = express()
app.use(express.json())
app.use('/search',router)
app.listen(8080,()=>{console.log("Listening on port 8080")})