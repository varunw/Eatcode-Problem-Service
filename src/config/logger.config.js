const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb')

const allowedTransport = [];

allowedTransport.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        // winston.format.simple()
    )
}))

allowedTransport.push(new winston.transports.MongoDB({
    level:'error',
    db:LOG_DB_URL,
    collection:'logs',
}))

allowedTransport.push(new winston.transports.File({
    filename:`app.log`
}))

const logger = winston.createLogger({
    format:winston.format.combine(
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((info)=> `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
    ),
    transports:allowedTransport
})

module.exports = logger;