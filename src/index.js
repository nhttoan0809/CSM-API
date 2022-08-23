const express = require('express')
// const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 5000;
const route = require('./routes')
const db = require('./config/db')

// Connect to MongoDB
db.connect()

// app.use(morgan('combined'))

route(app)

app.listen(port, () => {
    console.log(`Server for COLD STORAGE MANAGEMENT is running on http://localhost:${port}`);
})