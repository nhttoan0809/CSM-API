const express = require('express')
// const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 5000;

// app.use(morgan('combined'))

app.get('/', (rep, res) => {
    return res.json({
        url: '/',
        data: `don't dave any data on this api`,
        'another-url': [`/`,'/storage']
    })
})

app.get('/storage', (rep, res) => {
    return res.json({
        url: '/storage',
        data: `don't have any data on this api`,
        'another-url': [`/`,'/storage']
    })
})

app.listen(port, () => {
    console.log(`Server for COLD STORAGE MANAGEMENT is running on http://localhost:${port}`);
})