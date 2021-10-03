const express = require('express')
const path = require('path')

const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require('./config/docs')

require('dotenv').config({ path: path.resolve(__dirname, './config/.env') })
require('./db/mongoose')
const recordRouter = require('./routers/records')

const app = express()
const port = process.env.PORT || 3000
app.listen(port, () => {
})

app.use(express.json())

app.use('/api', recordRouter)
app.use('/api-docs', swaggerUI.serve,
    swaggerUI.setup(swaggerDocs, {
        explorer: true,
    })
);
app.all('*', (req, res, next) => {
    res.status(404).json({
        message: `Can't find ${req.originalUrl} on this server!`,
        code: 404
    });

});

module.exports = app
