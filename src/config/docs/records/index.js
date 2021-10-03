const getRecords = require('./get-records');

module.exports = {
    paths:{
        '/api/records':{
            ...getRecords,
        }
    }
}
