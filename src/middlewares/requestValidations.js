const moment = require('moment');

/**
 * @description Record request validation middleware parameters
 */
const recordValidation = (req, res, next) => {

    var { startDate, endDate, minCount, maxCount } = req.body;

    if(startDate == null ||endDate == null || minCount == null || maxCount == null) {

        res.status(500).json({
            message: 'Missing parameters: startDate, endDate, minCount or maxCount.',
            code: 100
        });
    }

    if(typeof minCount != "number" || typeof maxCount != "number"){
        res.status(500).json({
            message: 'Parameter not valid: minCount, maxCount.',
            code: 101
        });
    }

    if(minCount > maxCount) {
        res.status(500).json({
            message: 'MinCount must be smaller than maxCount',
            code: 102
        });
    }

    if(!moment(startDate, "YYYY-MM-DD", true).isValid() || !moment(endDate, "YYYY-MM-DD", true).isValid()){

        res.status(500).json({
            message: 'Date format is not valid.(YYYY-MM-DD)',
            code: 103
        });
    }

    if((moment(startDate, "YYYY-MM-DD", true).valueOf() > (moment(endDate, "YYYY-MM-DD", true).valueOf()))) {

        res.status(500).json({
            message: 'StartDate must be smaller than endDate',
            code: 104
        });
    }
    else next();
}

module.exports = {
    recordValidation
}
