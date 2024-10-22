const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


// app.use('/api/accounts', require('./routes/accountRoutes'))
// app.use('/api/car', require('./routes/carRoutes'))

app.listen(port, () => console.log(`Server start on port ${port}`))