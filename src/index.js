const express = require('express')
const cors = require('cors')
// const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 8000;
const route = require('./routes')
const db = require('./config/db')

const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

// Connect to MongoDB
db.connect()

// app.use(morgan('combined'))

route(app)

app.listen(port, () => {
    console.log(`Server for COLD STORAGE MANAGEMENT is running on http://localhost:${port}`);
})