const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const movieRoutes = require('./routes/movies')
const userRoutes = require('./routes/user')
const { default: mongoose } = require('mongoose')

app.use(cors())
app.use(express.json())

app.use(userRoutes)
app.use(movieRoutes)



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to db');
        app.listen(3000, () => {
            console.log('app is running on port 3000');
        })
    })
    .catch((err) => {
        console.log(err);
    })