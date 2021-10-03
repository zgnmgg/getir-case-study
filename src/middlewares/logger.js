const winston = require('winston')
const {format} = require('winston');
/**
 * @description Add console log for using winston library
 */
const addConsoleLog = (error) => {

    const logger = winston.createLogger({
        format: winston.format.combine(format.timestamp()),
        transports: [
            new winston.transports.Console({
                format: winston.format.simple()
            }),
        ]
    });

    logger.info(error);
}

module.exports = {
    addConsoleLog: addConsoleLog,
}
